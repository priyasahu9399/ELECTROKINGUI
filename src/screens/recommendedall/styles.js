import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  main_img: {
    width: width,
    height: height * 0.28,
    resizeMode: 'stretch',
  },
  elevation: {
    elevation: 3,
    // borderWidth:0.4,
    borderColor: 'white',
  },
  padding: {padding: width * 0.04,},
  category: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 16,
    marginLeft: width * 0.02,
    // marginTop: height * 0.03,
    margin: height * 0.02,
  },

//   brand_img: {
//     width: width * 0.37,
//     height: height * 0.12,
//     alignSelf: 'center',
//     borderWidth: 1,
//   },
});
