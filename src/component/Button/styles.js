import {Dimensions, StyleSheet} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  btn_text: {
    fontFamily: 'Poppins-SemiBold-600',
    color: COLORS.white,
    padding: width * 0.03,
    fontSize: 13,
  },
  touch_btn: {
    backgroundColor: COLORS.orange,
    width: width * 0.4,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    margin: height * 0.03,
  },

  flex_row: {
    flexDirection: 'row',
  },
  Google_box: {
    borderWidth: 1.5,
    width: width * 0.6,
    borderRadius: 9,
    alignSelf: 'center',
    borderColor: '#C1C1C1',
    marginTop: height * 0.01,
  },
  google_icon: {
    width: width * 0.08,
    height: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.012,
    marginLeft: width * 0.03,
    marginRight: width * 0.02,
  },
  google: {
    fontFamily: 'Poppins-Regular-400',
    fontSize: 12,
    color: COLORS.black,
    padding: width * 0.022,
  },

  touch_Addressbtn:{
     backgroundColor: COLORS.orange,
    width: width * 0.4,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center', 
    margin: height * 0.01,

  }
});