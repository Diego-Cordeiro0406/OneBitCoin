import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContent: {
    alignItems: 'center',
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    width: '95%',
  },
  containerLeft: {
    paddingLeft: 7
  },
  contentLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dayCotation: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    height:30,
    width:30,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default styles