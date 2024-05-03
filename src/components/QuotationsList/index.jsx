import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { useState, useEffect, Fragment } from 'react'
import axios from 'axios';

import styles from './styles'
import QuotationsItems from './QuotationsItems';

export default function QuotationsList() {
  const [query, setQuery] = useState(30);
  const [queryData, setQueryData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('batata');
        const currentData = await fetch(
          `https://economia.awesomeapi.com.br/json/daily/BTC-BRl/${query}`);
        const currentJson = await currentData.json()
        console.log(currentData)
        // console.log(currentJson)
        setQueryData(currentJson)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query])
  // console.log(queryData)
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
      {/* <ScrollView> */}
        <FlatList
          data={queryData}
          renderItem={({item}) => {
            return <QuotationsItems date={item.timestamp} value={item.ask}/>
          }}
        />
      {/* </ScrollView> */}
    </Fragment>
  )
}