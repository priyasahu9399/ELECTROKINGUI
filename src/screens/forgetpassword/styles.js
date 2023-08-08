import {Dimensions, StyleSheet} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  flexonebox: {flex: 1, backgroundColor: COLORS.white},
  padding: {padding: width * 0.08, paddingTop: height * 0.0},
  loginimg: {
    width: width,
    height: height * 0.5,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: height * -0.02,
  },
  Forget_text: {
    position: 'absolute',
    bottom: 88,
    alignSelf: 'center',
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 17,
  },
  input_box: {
    //  backgroundColor: COLORS.gray1,
    padding: width * 0.03,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 10,
    marginBottom: height * 0.03,
    fontSize: 11,
    color: COLORS.black,
    ...FONTS.fiveHundred,
  },

  center: {
    alignSelf: 'center',
  },
  input_label: {
    ...FONTS.sixHundred,
    fontSize: SIZES.h5,
    color: COLORS.black,
  },

  marginTop: {
    marginTop: height * -0.05,
  },
  googlemarginTop: {marginTop: height * 0.02},
  flex_row: {
    flexDirection: 'row',
  },
  forget: {
    color: COLORS.blue,
    textAlign: 'right',
    marginTop: width * -0.01,
    marginBottom: height * -0.02,
  },
  term_condition: {
    fontFamily: 'Poppins-Medium-500',
    fontSize: 10,
  },
  loginhere: {
    marginTop: height * 0.08,
    alignSelf: 'center',
  },
});
