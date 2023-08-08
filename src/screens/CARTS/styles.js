import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  pymentrowflex: {
    flexDirection: 'row',
  },
  pymentorder_box2: {
    elevation: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#A9A9A9',
    backgroundColor: COLORS.white,
    margin: height * 0.02,
    marginBottom: height * 0.0,
    paddingVertical: height * 0.03,
  },
  pymentorder_img: {
    width: width * 0.37,
    height: height * 0.1,
  },
  pymentorder_text1: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    width: width * 0.45,
    fontSize: 11,
    lineHeight: 18,
    marginLeft: width * 0.05,
  },
  pymentorder_Qty: {
    width: width * 0.1,
    fontSize: 13,
    marginTop: height * 0.01,
  },
  number1: {textDecorationLine: 'underline', marginLeft: width * 0.02},
  pymentplusminus_box: {
    marginLeft: width * -0.04,
    marginTop: height * 0.006,
  },
  pymentorder_plusminus: {
    color: '#FF6745',
    fontSize: 10,
    fontWeight: 'bold',
    // margin:-1
  },

  subtract: {
    marginTop: height * -0.01,
  },
  newCoupon: {
    color: COLORS.black,
    fontSize: 12,
    ...FONTS.fiveHundred,
    paddingLeft: width * 0.08,
    marginBottom: height * 0.015,
    // lineHeight:25,
  },
  enter_code: {
    borderBottomWidth: 1,
    width: width * 0.4,
    padding: height * -0.1,
    borderColor: '#C1C1C1',
    fontSize: 12,
    ...FONTS.fiveHundred,
    textAlign: 'center',
  },
  applybox_row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //  paddingBottom: height * 0.02,
  },
  applybox: {
    backgroundColor: '#FF7900',
    width: width * 0.22,
    borderRadius: 30,
    alignItems: 'center',
  },
  apply: {
    ...FONTS.sixHundred,
    color: COLORS.white,
    fontSize: 12,
    paddingTop: height * 0.004,
  },
  price_text: {
    margin: width * 0.01,
    width: width * 0.6,
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: 12,
  },
  price_textcolor: {
    color: '#13D33E',
  },
  box_3: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  bold: {
    ...FONTS.fiveHundred,
  },
  Placeorder_box: {
    backgroundColor: '#FF7900',
    alignItems: 'center',
    margin: width * 0.05,
    borderRadius:8,
  },
  Placeorder:{
   color:COLORS.white,
   padding:width * 0.03,
   fontSize:10,
   ...FONTS.sixHundred,

  }
});
