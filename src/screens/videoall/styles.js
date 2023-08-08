import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  main_img: {
    width: width,
    height: height * 0.25,
    resizeMode: 'stretch',
  },
  category: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 16,
    marginLeft: width * 0.02,
    margin: height * 0.03,
  
  },
  padding: {padding: width * 0.04},
  marginbottom: {marginBottom: height * 0.025},
});
