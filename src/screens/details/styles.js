import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  main_box: {
    padding: width * 0.04,
  },
  flexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  red_box: {
    backgroundColor: '#E83B3B',
    height: height * 0.06,
    width: width * 0.12,
    padding: width * 0.015,
    borderRadius: 50,
  },

  redbox_text: {
    color: COLORS.white,
    fontSize: 8,
    alignSelf: 'center',
    ...FONTS.sevenHundred,
  },
  shareicon_box: {
    height: height * 0.04,
    width: width * 0.08,
    padding: width * 0.013,
    borderWidth: 1,
    borderRadius: 20,
  },
  icon_style: {
    height: height * 0.022,
    width: width * 0.04,
    alignSelf: 'center',
    tintColor: COLORS.black,
  },
  slider_text1: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 12,
  },
  slider_text2: {
    ...FONTS.sevenHundred,
    color: COLORS.black,
    fontSize: 15,
  },
  
  direction_row: {
    flexDirection: 'row',
  },
  touch_btn: {
    backgroundColor: COLORS.orange,
    width: width * 0.5,
    marginTop: height * -0.01,
  },
  touch_btn2: {
    backgroundColor: COLORS.darkblue,
  },
  touch_btn_text: {
    ...FONTS.sevenHundred,
    color: COLORS.white,
    fontSize: 13,
    padding: width * 0.04,
    alignSelf: 'center',
  },
  text_box: {
    padding: width * 0.08,
    marginTop: height * -0.06,
  },
  heading: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 15,
    paddingBottom: height * 0.01,
    paddingTop: height * 0.02,
  },
  content: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 10,
    lineHeight: 18,

    // paddingTop: height * 0.01,
  },
  Specification_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Specificationcontent: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 9,
    lineHeight: 22,
  },

  Specificationheading: {
    fontSize: 11,
    marginBottom: height * 0.04,
    ...FONTS.sevenHundred,
  },
  day15warenty: {
    fontSize: 12,
    paddingBottom: height * 0.01,
    paddingTop: height * 0.0,
  },
  warrenty: {...FONTS.fiveHundred, fontSize: 11},

  add_review_text: {
    fontSize: 12,
    color: COLORS.white,
    padding: width * 0.03,
    ...FONTS.sixHundred,
    alignSelf: 'center',
  },
  add_review: {
    backgroundColor: COLORS.orange,
    alignSelf: 'center',
    borderRadius: 40,
    width: width * 0.4,
    margin: width * 0.1,
  },
  myStarStyle: {
    color: '#ffc107',
    textShadowRadius: 2,
    margin: width * 0.015,
    //  marginLeft:0
  },
  myEmptyStarStyle: {
    color: '#A9A9A9',
  },
  viewall_rating: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    paddingLeft: width * 0.02,
    marginBottom:height * 0.07,
        marginTop:height * 0.03,

  },
 fixed_bottom_btn:{
    position:'absolute',
    bottom:0,
  }
});
