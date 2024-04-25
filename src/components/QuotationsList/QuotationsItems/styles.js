import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContent: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    width: '95%',
  },
  containerLeft: {
    borderWidth: 3,
    borderColor: 'red',
  },
  contentLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentRight: {
    borderWidth: 3,
    borderColor: 'red',
  },
  dayCotation: {
    fontSize: 18
  },
  image: {
    height:30,
    width:30,
  },
  price: {
    fontSize: 18
  },
})

export default styles