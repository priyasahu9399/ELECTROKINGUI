import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  bajaj_icon: {
    width: width * 0.06,
    height: height * 0.03,
  },
  bajaj_text: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 10,
    width: width * 0.7,
    marginLeft: width * -0.03,
  },
  arrow_icon: {
    width: width * 0.02,
    height: height * 0.02,
    marginTop: height * 0.01,
  },
  row_line: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
    // paddinf:width*0.03,
  },

  // 2222222222

  pyment_radio_box: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#4463B1',
    width: width * 0.05,
    height: height * 0.025,
    marginLeft: width * 0.1,
  },
  pyment_innerradio_box: {
    borderRadius: 10,
    width: width * 0.032,
    height: height * 0.016,
    alignSelf: 'center',
    margin: width * 0.004,
    backgroundColor: '#4463B1',
  },
  flex_row: {
    flexDirection: 'row',
  },
  //   all_coupons: {
  //    ...FONTS.fourHundred,
  //      color:COLORS.black,
  //      fontSize:11,
  //      padding:width * 0.05,
  //    //   paddingLeft: width * 0.05,
  //   },
  padding: {
    padding: width * 0.05,
    paddingBottom: height * 0.0,
  },
  coupon: {
    width: width * 0.55,
    marginLeft: height * 0.03,
    color: COLORS.black,
    fontSize: 12,
  },
  bank_text2: {
    color: '#909090',
    fontSize: 9,
    marginLeft: height * 0.03,
  },
  pytm_icon: {
    width: width * 0.1,
    height: height * 0.03,
    // marginRight: width * 0.1,
  },
  // 333333

   address_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: height * 0.01,
        marginBottom: height * 0.035,
     alignItems: 'center',

  },
  dash_border: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    width: width * 0.28,
    margin: height * 0.012,
    borderColor: '#727272',
  },
  num_box: {
    backgroundColor: '#969696',
    width: width * 0.056,
    height: height * 0.028,
    borderRadius: 10,
    // backgroundColor:"#4463B1"
  },
  number: {
    fontSize: 8,
    ...FONTS.sixHundred,
    textAlign: 'center',
    color: COLORS.white,
    padding: width*0.01,
  },
  num_text: {
    fontSize: 7,
    ...FONTS.sixHundred,
    width: width * 0.2,
    marginLeft: width * -0.02,
    color: COLORS.black,
    marginTop:height*0.01,
    // paddingBottom:height*0.01
  },
  order:{
        marginLeft: width * -0.04,
  },
});
