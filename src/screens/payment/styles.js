import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  pyment_container: {
    // padding:width*0.05
  },
  box1: {
    marginTop: height * 0.018,
    elevation: 7,
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
  },
     boxorder: {
    padding: height * 0.01,
    elevation: 2,
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
    // paddingBottom: height * -0.01
  },
  border: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  text_offer: {
    color: '#00063F',
    fontSize: 10,
    ...FONTS.fourHundred,
    alignSelf: 'center',
    padding: width * 0.05,
  },

  flex_row: {
    flexDirection: 'row',
  },
  all_coupons: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 11,
    padding: width * 0.06,
    //   paddingLeft: width * 0.05,
  },
  Price_history: {
    color: '#909090',
    fontSize: 11,
    ...FONTS.fourHundred,
    // alignSelf: 'center',
    padding: width * 0.05,
  },
  Price_history1: {
    fontSize: 11,
    ...FONTS.fourHundred,
    padding: width * 0.05,
    width: width * 0.7,
  },
  price_history2: {
    color: COLORS.black,
    paddingBottom: width * 0.02,
  },
  payment_image: {
    width: width * 0.16,
    height: height * 0.026,
    margin: width * 0.04,
  },
  box2: {
    elevation: 2,
    backgroundColor: 'white',
    padding: width * 0.02,
    marginVertical: height * 0.02,
  },
  price_bottom: {
    elevation: 9,
    backgroundColor: COLORS.white,
    // marginTop: height * 0.01,
  },
  price_bottom_rupeetext: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 18,
    marginBottom: height * -0.01,
    marginTop: height * 0.02,
    letterSpacing: 3,
  },
  price_bottom_text2: {
    color: '#3845B7',
    fontSize: 8,
  },
  marginLeft: {
    marginLeft: width * 0.1,
    marginRight: width * 0.22,
  },
});
