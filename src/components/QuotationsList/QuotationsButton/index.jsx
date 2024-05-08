import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default function QuotationsButton({updateData, dayOfMonth, day}) {
  return (
    <TouchableOpacity onPress={() => updateData(day)} style={styles.periodButton}>
      <Text style={styles.textPeriodButton}>{`${dayOfMonth}`}</Text>
    </TouchableOpacity>
  )
}