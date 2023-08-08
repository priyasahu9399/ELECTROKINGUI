import {Dimensions, StyleSheet} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  icon_set: {
    // marginBottom: height * -0.01,
    marginTop: height * 0.03,
    width: width * 0.052,
    height: height * 0.025,
    alignSelf: 'center',
    marginBottom: height * 0.01,
  },
  text: {fontSize: 11, ...FONTS.sixHundred, marginBottom: height * 0.0},
});
