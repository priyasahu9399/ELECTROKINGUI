import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  Addressmain_box: {
    padding: width * 0.06,
  },
  rowflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   boxorder: {
    padding: height * 0.01,
    elevation: 2,
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
    // paddingBottom: height * -0.01
  },
  Delivery_address: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 14,
  },
  editBox: {
    elevation: 4,
    borderRadius: 5,
    width: width * 0.18,
    height: height * 0.035,
    backgroundColor: COLORS.white,
  },

  edit: {
    ...FONTS.fiveHundred,
    fontSize: 9,
    color: '#4463B1',
    alignSelf: 'center',
    padding: width * 0.01,
  },
  Textaddress_box: {
    width: width * 0.56,
    marginLeft: width * 0.1,
  },
  select_addressbox: {
    borderWidth: 1,
    elevation: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    padding: width * 0.04,
    marginTop: height * 0.03,
    backgroundColor: COLORS.white,
  },
  address_1: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: 13,
    marginBottom: height * 0.017,
  },
  address_2: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: 11,
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
  },
  radio_box: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#4463B1',
    width: width * 0.05,
    height: height * 0.025,
  },
  innerradio_box: {
    borderRadius: 10,
    width: width * 0.032,
    height: height * 0.017,
    alignSelf: 'center',
    margin: width * 0.004,
    backgroundColor: '#4463B1',
  },
  order_box2: {
    borderWidth: 1,
    elevation: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    backgroundColor: COLORS.white,
    padding: width * 0.04,
    marginTop: height * 0.04,
    paddingTop: height * 0.03,
  },
  order_img: {
    width: width * 0.33,
    height: height * 0.15,
    marginLeft: width * -0.02,
  },
  order_text1: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    width: width * 0.45,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: width * 0.01,
  },
  order_Qty: {
    width: width * 0.08,
    fontSize: 13,
  },
  plusminus_box: {
    marginLeft: width * -0.03,
    marginTop: height * -0.001,
  },
  order_plusminus: {
    color: '#FF6745',
    marginTop: width * -0.01,
    fontSize: 10,
    fontWeight: 'bold',
  },
  rupeebox: {
    marginLeft: width * 0.18,
  },
  order_rupee_text1: {
    ...FONTS.fourHundred,
    fontSize: 11,
    color: '#9C9C9C',
  },
  order_rupee_text2: {
    ...FONTS.fourHundred,
    fontSize: 11,
    color: COLORS.black,
    marginLeft: width * 0.03,
  },
  order_rupee_text3: {
    ...FONTS.sixHundred,
    color: '#13D33E',
    fontSize: 10,
    marginLeft: width * 0.03,
  },
  bottom_box: {
    alignSelf: 'center',
  },
  order_rupee_bottomtext: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 11,
  },
  free: {
    color: '#13D33E',
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
  secure_box: {
    width: width * 0.6,
    alignItems: 'center',
    margin: width * 0.05,
    marginBottom: height * -0.03,
  },
  secure_img: {
    width: width * 0.08,
    height: height * 0.043,
    margin: width * 0.03,
  },
  securepyment: {
    color: '#8A8A8A',
    fontSize: 10,
    ...FONTS.fourHundred,
  },

  price_bottom: {
    borderColor: '#CCCCCC',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    // marginTop: height * 0.03,
    justifyContent: 'space-between',
  },
 
  price_bottom_text1: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 18,
    marginBottom: height * -0.01,
    letterSpacing: 3,
  },
  price_bottom_text2: {
    color: '#3845B7',
    fontSize: 8,
    marginBottom: height * -0.02,
  },
  marginLeft: {
    marginLeft: width * 0.08,
  },
});
