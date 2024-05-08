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
import QuotationsButton from './QuotationsButton';

export default function QuotationsList() {
  const [query, setQuery] = useState(30);
  const [queryData, setQueryData] = useState(null)

  const periods = [
    {
      day: 7,
      dayOfMonth: '7D'
    }, {
      day: 15,
      dayOfMonth: '15D'
    }, {
      day: 30,
      dayOfMonth: '1M'
    }, {
      day: 90,
      dayOfMonth: '3M'
    }, {
      day: 120,
      dayOfMonth: '6M'
    }]

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
        {
          periods.map((period) => (
            <QuotationsButton
              dayOfMonth={period.dayOfMonth}
              day={period.day}
              updateData={setQuery}
            />
          ))
        }
      </View>
      <View style={styles.periodMessageContainer}>
        <Text style={styles.periodMessage}>{`Exibindo cotação dos ultimos ${query} dias`}</Text>
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