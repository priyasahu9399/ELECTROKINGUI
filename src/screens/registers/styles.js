import {Dimensions, StyleSheet} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  flexonebox: {flex: 1, backgroundColor: COLORS.white},
  padding: {padding: width * 0.1, paddingTop: height * 0.04},
  welcome: {
    fontSize: 30,
    color: COLORS.black,
    fontFamily: 'Poppins-Medium-500',
    marginBottom: height * -0.01,
  },
  loginking: {
    width: width * 0.42,
    height: height * 0.043,
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
    marginTop: height * 0.05,
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
  term_condition: {
    fontFamily: 'Poppins-Medium-500',
    fontSize: 10,
  },
  loginhere: {
    marginTop: height * 0.1,
    alignSelf: 'center',
  },
});
