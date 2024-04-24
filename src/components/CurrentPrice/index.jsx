import { Text, View } from 'react-native'
import styles from './styles'

export default function CurrentPrice() {
  return (
    <View style={styles.currentContainer}>
      <Text style={styles.currentPrice}>$ 4555.665</Text>
      <Text style={styles.currentText}>ultima cotação</Text>
    </View>
  )
}