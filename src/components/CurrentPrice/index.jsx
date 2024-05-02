import { Text, View } from 'react-native'
import styles from './styles'
import { useEffect, useState } from 'react'

export default function CurrentPrice() {
  const [currentPrice, setData] = useState(null)

  useEffect(() => {
    // console.log('fui chamado')
    const fetchData = async () => {
      // console.log('fui chamado 2')
      // try {
        const currentData = await fetch(
          'https://economia.awesomeapi.com.br/BTC-BRL/1',
        {method: 'GET'});
        const currentJson = await currentData.json()
        // console.log(currentData)
        // console.log(currentJson)
        setData(parseFloat(currentJson[0].ask) / 1000)
      // } catch (error) {
      //   console.log(error);
      // }
    };
    fetchData();
  }, [])
  // console.log(currentPrice)
  return (
    <View style={styles.currentContainer}>
      <Text style={styles.currentPrice}>R$ {currentPrice}</Text>
      <Text style={styles.currentText}>ultima cotação</Text>
    </View>
  )
}