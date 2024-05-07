import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { useState, useEffect, Fragment, useContext } from 'react'

import styles from './styles'
import QuotationsItems from './QuotationsItems';
import { Context } from '../../context/Context';

export default function QuotationsList() {
  const [query, setQuery] = useState(30);
  const [queryData, setQueryData] = useState(null)

  const context = useContext(Context)
  const { setData } = context

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentData = await fetch(
          `https://economia.awesomeapi.com.br/json/daily/BTC-BRl/${query}`);
        const currentJson = await currentData.json()
        setQueryData(currentJson)

        const dataTographic = currentJson.map((item) => {
          return Number(item.ask) / 1000
        })
        setData(dataTographic)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query])

  return (
    <Fragment>
      <View style={styles.periodContainer}>
        <TouchableOpacity onPress={() => setQuery(7)} style={styles.periodButton}>
          <Text style={styles.textPeriodButton}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setQuery(15)} style={styles.periodButton}>
          <Text style={styles.textPeriodButton}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setQuery(30)} style={styles.periodButton}>
          <Text style={styles.textPeriodButton}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setQuery(90)} style={styles.periodButton}>
          <Text style={styles.textPeriodButton}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setQuery(120)} style={styles.periodButton}>
          <Text style={styles.textPeriodButton}>6M</Text>
        </TouchableOpacity>
      </View>
        <FlatList
          data={queryData}
          renderItem={({item}) => {
            return <QuotationsItems date={item.timestamp} value={item.ask}/>
          }}
        />
    </Fragment>
  )
}