import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoricGraphic from './src/components/HistoricGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#F50D41' barStyle='ligth-content' style="auto" />
      <CurrentPrice />
      <HistoricGraphic />
      <QuotationsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
