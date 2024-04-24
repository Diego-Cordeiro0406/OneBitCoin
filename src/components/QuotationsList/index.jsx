import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function QuotationsList() {
  return (
    <View style={styles.periodContainer}>
      <TouchableOpacity style={styles.periodButton}>
        <Text style={styles.textPeriodButton}>7D</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.periodButton}>
        <Text style={styles.textPeriodButton}>15D</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.periodButton}>
        <Text style={styles.textPeriodButton}>1M</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.periodButton}>
        <Text style={styles.textPeriodButton}>3M</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.periodButton}>
        <Text style={styles.textPeriodButton}>6M</Text>
      </TouchableOpacity>
    </View>
  )
}