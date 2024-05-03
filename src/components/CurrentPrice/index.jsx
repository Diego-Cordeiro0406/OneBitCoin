import { Text, View } from 'react-native'
import styles from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CurrentPrice() {
  const [currentPrice, setData] = useState(null)

  const fetchData = async () => {
      try {
        // console.log('primeiro passo')
        const url = 'https://economia.awesomeapi.com.br/BTC-BRL/1';
        const response = await axios.get(url);
        // console.log('segundo passo')
        //   'https://economia.awesomeapi.com.br/BTC-BRL/1',
        // {method: 'GET'});
        // const currentJson = await currentData.json()
        // console.log(response)
        setData(parseFloat(response.data[0].ask) / 1000)
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View style={styles.currentContainer}>
      <Text style={styles.currentPrice}>R$ {currentPrice}</Text>
      <Text style={styles.currentText}>ultima cotação</Text>
    </View>
  )
}