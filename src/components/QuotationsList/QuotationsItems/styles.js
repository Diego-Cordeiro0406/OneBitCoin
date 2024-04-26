import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContent: {
    alignItems: 'center',
    backgroundColor: '#000000',
    // borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    width: '90%',
  },
  containerLeft: {
    // borderWidth: 3,
    // borderColor: 'red',
  },
  contentLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentRight: {
    // borderWidth: 3,
    // borderColor: 'red',
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