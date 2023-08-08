import {Dimensions, StyleSheet} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  flexonebox: {flex: 1, backgroundColor: COLORS.white},
  padding: {padding: width * 0.08, paddingTop: height * 0.0},
  loginimg: {
    width: width,
    height: height * 0.48,
    resizeMode: 'cover',
    alignSelf: 'center',
    // marginTop: height * -0.02,
  },
  Forget_text: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 17,
    // paddingBottom:height *0.1
  },
  input_box: {
    //  backgroundColor: COLORS.gray1,
    padding: width * 0.03,
    width: width * 0.85,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 8,
    paddingLeft: width * 0.06,
    marginBottom: height * 0.03,
    fontSize: 13,
    color: COLORS.black,
    ...FONTS.fourHundred,
  },

  center: {
    alignSelf: 'center',
  },
  input_label: {
    ...FONTS.sixHundred,
    fontSize: SIZES.h5,
    color: COLORS.black,
    // marginTop:height *0.0
  },
  set_btn: {marginTop: height * 0.02, marginBottom: height * -0.05},
  relative:{
    position:'relative',
  },
  eyeicon_width: {
    width: width * 0.05,
    height: height * 0.018,
    tintColor: '#444444',
  },
  eyeicon1_set: {
    position: 'absolute',
    right: 10,
    top: 45,
  },
  // eyeicon2_set: {
  //   position: 'absolute',
  //   right: 10,
  //   top: 45,
  // },
  absoltepositon: {
    position: 'absolute',
    top: 268,
  },
  googlemarginTop: {marginTop: height * 0.02},
  flex_row: {
    flexDirection: 'row',
  },
  term_condition: {
    fontFamily: 'Poppins-Medium-500',
    fontSize: 10,
  },
  loginhere: {
    marginTop: height * 0.15,
    alignSelf: 'center',
  },
});
