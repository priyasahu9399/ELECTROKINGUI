import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  search_container: {
    padding: width * 0.04,
  },
  row_input: {
    flexDirection: 'row',
  },
  search_input: {
    elevation: 8,
    backgroundColor: COLORS.white,
    borderRadius: 40,
    paddingHorizontal: width * 0.05,
    // paddingVertical: height * 0.01,
  },
  search_icon: {
    width: width * 0.04,
    height: height * 0.02,
    margin: height * 0.025,
    tintColor: '#A4A4A4',
  },
  search_text: {
    fontSize: 14,
    ...FONTS.sixHundred,
    width: width * 0.7,
  },
  recent_search: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: 13,
    paddingLeft: width * 0.03,
    marginTop: height * 0.04,
   marginBottom: height * 0.01,

  },
 row_input_flexwrap:{
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent: 'center',
 },
  recent_search_box: {
    borderColor: '#4A4A4A',
    borderWidth: 0.5,
    borderRadius: 14,
    elevation: 2,
    margin: width * 0.01,
  },
  recent_search_text: {
    color: '#4A4A4A',
    ...FONTS.fourHundred,
    fontSize: 11,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    paddingHorizontal: width * 0.042,
    // marginBottom:height * -0.001,
    paddingVertical: width * 0.013,
 },
});
