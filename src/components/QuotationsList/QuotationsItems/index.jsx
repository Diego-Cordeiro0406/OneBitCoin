import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationsItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.containerLeft}>
        <View style={styles.contentLeft}>
          <Image style={styles.image} source={require("../../../img/bitcoin.png")} />
          <Text style={styles.dayCotation}>25/04/2024</Text>
        </View>
      </View>
      <View style={styles.contentRight}>
        <Text style={styles.price}>$ 3445.665</Text>
      </View>
    </View>
  )
}