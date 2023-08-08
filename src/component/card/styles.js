import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  // profile cart

  item_row: {
    flexDirection: 'row',
  },
  set_row_item: {
    elevation: 2,
    backgroundColor: 'white',
    paddingVertical: height * 0.021,
    paddingHorizontal: width * 0.02,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: height * 0.015,
  },
  pro_text: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 12,
    marginLeft: width * 0.05,
    width: width * 0.57,
  },
  arrow: {
    width: width * 0.033,
    height: height * 0.018,
  },

  // categories
  category_box_wrap: {
    flexDirection: 'row',
  },
  categorybox_background: {
    width: width * 0.42,
    // height: height * 0.23,
    backgroundColor: '#D9D9D9',
    elevation: 4,
    padding: width * 0.03,
    borderRadius: 10,
    margin: width * 0.02,
  },
  category_image: {
    width: width * 0.33,
    height: height * 0.12,
    alignSelf: 'center',
    borderRadius: 10,
  },
  category_text: {
    alignSelf: 'center',
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 12,
    marginTop: height * 0.02,
  },
  boards: {
    marginTop: height * 0.001,
  },

  // recommend

  Recommended_box_size: {
    width: width * 0.42,
    // height: height * 0.4,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: width * 0.01,
    borderRadius: 10,
    margin: width * 0.02,
    padding: width * 0.01,
  },
  Recommended_toptext: {
    ...FONTS.sixHundred,
    color: '#959595',
    fontSize: 11,
    alignSelf: 'center',
    
  },
  Recommended_image: {
    width: width * 0.35,
    height: height * 0.15,
    alignSelf: 'center',
    margin: width * 0.03,
  },
  heart_icon: {
    width: width * 0.05,
    height: height * 0.022,
  marginLeft:width * 0.33,

  },
  Recommended_bluetext: {
    color: '#222D8E',
    lineHeight: 20,
    ...FONTS.fiveHundred,
    fontSize: 11,
    alignSelf: 'center',
  },
  Recommended_sku: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: 11,
    paddingLeft: width * 0.02,
  },
  Recommended_flexrow: {
    flexDirection: 'row',
    marginLeft: width * 0.02,
  },
  Recommended_startright: {
    color: '#A9A9A9',
    fontSize: 10,
    ...FONTS.sixHundred,
    paddingLeft: width * 0.01,
  },
  rupeebox: {
    marginTop: height * 0.01,
  },
  Recommended_rupee: {
    color: COLORS.black,
    fontSize: 13,
    marginRight: width * 0.12,
    paddingLeft: width * 0.01,
  },
  Recommended_icon: {
    width: width * 0.05,
    height: height * 0.025,
  },

  myStarStyle: {
    color: '#ffc107',
    textShadowRadius: 1,
  },
  myEmptyStarStyle: {
    color: '#A9A9A9',
  },

  // service

  linearbox: {
    elevation: 2,
    // borderWidth: 1,
    borderRadius: 15,
    marginBottom: height * 0.02,
  },
  service_box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: width * 0.04,
    width: width,
  },
  service_img: {
    width: width * 0.36,
    height: height * 0.14,
  },
  service_text: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 16,
    width: width * 0.45,
    lineHeight: 30,
  },

  // blog

  blog_box: {
    width: width * 0.92,
    // height: height * 0.36,
    backgroundColor: '#D9D9D9',
    padding: width * 0.04,
    borderRadius: 15,
  },
  blog_img: {
    width: width * 0.85,
    height: height * 0.2,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: height * 0.03,
  },
  blog_text: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 16,
    width: width * 0.8,
    textAlign: 'center',
    lineHeight: 28,
  },

  Video_box: {
    width: width * 0.92,
    // height: height * 0.41,
    backgroundColor: '#D9D9D9',
    padding: width * 0.04,
    borderRadius: 15,
  },

  playvideo: {
    alignSelf: 'center',
    borderRadius: 10,
  },
  Blogvideocart_box: {
    width: width * 0.92,
    backgroundColor: '#D9D9D9',
    padding: width * 0.04,
    borderRadius: 15,
    marginBottom: height * 0.025,
  },
  star_set: {marginLeft: width * -0.5, marginTop: height * 0.02},

  rating_text: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 12,
    lineHeight: 20,
    margin: height * 0.01,
  },
  text_2: {
    marginTop: height * -0.01,
  },
  ratingStarStyle: {
    color: '#ffc107',
    textShadowRadius: 2,
    margin: width * 0.015,
  },
  EmptyratingStarStyle: {
    color: '#A9A9A9',
  },

  // selectaddress

  new_address: {
    width: width * 0.9,
    color: '#3735B0',
    ...FONTS.fiveHundred,
    fontSize: 11,
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
    marginTop: height * 0.02,
    backgroundColor: COLORS.white,
  },
  address_1: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: 13,
    marginBottom: height * 0.012,
  },
  address_2: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    fontSize: 10,
    lineHeight: 16,
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
    // borderWidth: 1,
    borderRadius: 10,
    width: width * 0.032,
    height: height * 0.016,
    alignSelf: 'center',
    margin: width * 0.004,
    backgroundColor: '#4463B1',
  },
  editBox: {
    elevation: 2,
    borderRadius: 5,
    width: width * 0.12,
    height: height * 0.03,
    marginTop: height * -0.001,
  },

  edit: {
    ...FONTS.fiveHundred,
    fontSize: 9,
    color: '#4463B1',
    alignSelf: 'center',
    padding: width * 0.01,
  },
  // cartsCART

  pymentrowflex: {
    flexDirection: 'row',
  },
  pymentorder_box2: {
    elevation: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.01,
    paddingTop: height * 0.03,
  },
  pymentorder_img: {
    width: width * 0.37,
    height: height * 0.1,
    marginLeft: width * 0.02,
    // borderWidth:1
  },
  pymentorder_text1: {
    color: COLORS.black,
    ...FONTS.fourHundred,
    width: width * 0.45,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: width * 0.05,
  },
  pymentorder_Qty: {
    width: width * 0.1,
    fontSize: 13,
    marginTop: height * 0.006,
  },
  number1: {textDecorationLine: 'underline', marginLeft: width * 0.02},
  pymentplusminus_box: {
    marginLeft: width * -0.04,
  },
  pymentorder_plusminus: {
    color: '#FF6745',
    fontSize: 10,
    fontWeight: 'bold',
    // margin:-1
  },
  pymentrupeebox: {
    marginLeft: width * 0.18,
    marginTop: height * 0.01,
  },
  subtract: {
    marginTop: height * -0.01,
  },
  pymentorder_rupee_text1: {
    ...FONTS.fourHundred,
    fontSize: 11,
    color: '#9C9C9C',
  },
  pymentorder_rupee_text2: {
    ...FONTS.fourHundred,
    fontSize: 11,
    color: COLORS.black,
    marginLeft: width * 0.02,
  },
  pymentorder_rupee_text3: {
    ...FONTS.fourHundred,
    color: '#13D33E',
    fontSize: 11,
    marginLeft: width * 0.04,
  },
  remove_buy: {
    color: '#737373',
    ...FONTS.fourHundred,
    fontSize: 11,
    textAlign: 'center',
    padding: width * 0.03,
  },
  pymentrow_between: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  border: {
    marginTop: height * 0.02,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  borderRight: {
    height: height * 0.06,
    borderWidth: 0.8,
    borderColor: '#D9D9D9',
  },
  deleteicon: {
    width: width * 0.03,
    height: height * 0.018,
    marginTop: height * 0.018,
  },
});
