import {Dimensions, StyleSheet} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  flexonebox: {flex: 1, backgroundColor: COLORS.white},
  padding: {padding: width * 0.08, paddingTop: height * -0.01},
  loginimg: {
    width: width * 0.83,
    height: height * 0.35,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: height * -0.01,
    //  backgroundColor:'red'
  },
  loginking: {
    position: 'absolute',
    top: 130,
    alignSelf: 'center',
    width: width * 0.6,
    height: height * 0.06,
  },
  center: {
    alignSelf: 'center',
  },
  input_label: {
    fontFamily: 'Poppins-Bold-700',
    fontSize: SIZES.h4,
    color: COLORS.black,
  },

  greenicon: {
    width: width * 0.03,
    height: height * 0.015,
    tintColor: COLORS.white,
    margin: width * 0.01,
  },

  rightgreenbackground: {
    backgroundColor: '#33A03E',
    borderRadius: 10,
  },

  relative: {
    position: 'relative',
  },

  greenabsolute: {
    position: 'absolute',
    right: 10,
    top: 45,
  },
  marginTop: {
    marginTop: height * 0.01,
  },

  eyeicon_width: {
    width: width * 0.05,
    height: height * 0.018,
    tintColor: '#808080',
  },
  eyeicon1_set: {
    position: 'absolute',
    right: 10,
    top: 45,
  },

  flex_row: {
    flexDirection: 'row',
  },
  forget: {
    color: COLORS.blue,
    textAlign: 'right',
    marginTop: width * -0.03,
  },
  term_condition: {
    fontFamily: 'Poppins-Medium-500',
    fontSize: 10,
  },
  loginhere: {
    marginTop: height * 0.1,
    alignSelf: 'center',
  },
});
