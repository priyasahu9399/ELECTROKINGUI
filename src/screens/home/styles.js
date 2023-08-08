import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  main_img: {
    width: width,
    height: height * 0.25,
    resizeMode: 'stretch',
  },
  flex_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeall: {
    fontSize: 12,
    ...FONTS.sixHundred,
    margin: height * 0.033,
    color: COLORS.black,
  },
  list_boxitems: {
    backgroundColor: COLORS.white,
    elevation: 3,
    width: width * 0.25,
    padding: width * 0.027,
    margin: width * 0.01,
    borderRadius: 16,
    alignItems: 'center',
  },
  list_text: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 10,
  },
  category: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 16,
    marginLeft: width * 0.02,
    margin: height * 0.03,
  },

  brand_img: {
    width: width * 0.37,
    height: height * 0.12,
    alignSelf: 'center',
    borderWidth: 1,
  },

    Video_box: {
    width: width * 0.92,
    // height: height * 0.41,
    backgroundColor: '#D9D9D9',
    padding: width * 0.04,
    borderRadius: 15,
    marginTop: height * 0.1,
  },
    video_img: {
    width: width * 0.85,
    height: height * 0.2,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: height * 0.03,
    resizeMode: 'cover',
  },
});
