import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationsItems(props) {
  const timestampString = props.date
  const timestamp = parseInt(timestampString, 10); // Converter a string para um número

const date = new Date(timestamp * 1000); // Criar um objeto Date com o timestamp em segundos

// Obter o dia, mês e ano da data
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Os meses são indexados a partir de zero, então somamos 1
const year = date.getFullYear();

// Formatar a data no padrão DD/MM/YYYY
const formatedDate = `${day}/${month}/${year}`;

  return (
    <View style={styles.mainContent}>
      <View style={styles.containerLeft}>
        <View style={styles.contentLeft}>
          <Image style={styles.image} source={require("../../../img/bitcoin.png")} />
          <Text style={styles.dayCotation}>{formatedDate}</Text>
        </View>
      </View>
      <View style={styles.contentRight}>
        <Text style={styles.price}>{`R$ ${(parseFloat(props.value) / 1000)}`}</Text>
      </View>
    </View>
  )
}