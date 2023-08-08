import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  Addressmain_box: {
    padding: width * 0.04,
  },
  boxorder: {
    padding: height * 0.01,
    elevation: 2,
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
  },
  Delivery_address: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 13,
  },
  address_box: {
    backgroundColor: COLORS.white,
    marginTop: height * 0.02,
    elevation: 1,
    borderWidth: 1,
    padding: width * 0.03,
    borderRadius: 9,
    borderColor: '#CCCCCC',
    flexDirection: 'row',
    alignItems: 'center',
  },
  plus_Box: {
    borderWidth: 1,
    borderColor: '#3735B0',
    borderRadius: 10,
    width: width * 0.04,
    height: height * 0.02,
    marginLeft: width * 0.2,
    marginRight: width * 0.02,
  },
  plus: {
    width: width * 0.02,
    height: height * 0.012,
    margin: width * 0.006,
  },
  new_address: {
    width: width * 0.9,
    color: '#3735B0',
    ...FONTS.fiveHundred,
    fontSize: 11,
  },
});
