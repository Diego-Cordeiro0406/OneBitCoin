import { Text, View } from 'react-native'
import styles from './styles'
import { useEffect, useState } from 'react'

export default function CurrentPrice() {
  const [currentPrice, setData] = useState(null)

  const fetchData = async () => {
      try {
        const currentData = await fetch(
          'https://economia.awesomeapi.com.br/BTC-BRL/1',
        {method: 'GET'});
        const currentJson = await currentData.json()
        setData(parseFloat(currentJson[0].ask) / 1000)
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