 import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  flexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   //  borderWidth: 1,
  },
  myStarStyle: {
    color: '#ffc107',
    textShadowRadius: 2,
    margin:width*0.015
  },
  myEmptyStarStyle: {
    color: '#A9A9A9',
  },
  progress: {
    marginTop: height * 0.01,
  },
  numtext: {
    fontSize: 12,
    paddingTop: height * -0.01,
  },
});