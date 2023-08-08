import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  main_img: {
    width: width,
    height: height * 0.27,
    resizeMode: 'stretch',
  },
  elevation: {
    elevation: 6,
    borderWidth:0.2,
    bordercolor: '#ffff',
  },
  flex_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  category: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 15,
    marginLeft: width * 0.02,
    marginVertical: height * 0.01,
  },
});
