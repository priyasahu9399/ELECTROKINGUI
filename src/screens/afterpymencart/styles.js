import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  pyment_box: {
    padding: width * 0.03,
    paddingTop: height * -0.01,
  },
  pymentrowflex: {
    flexDirection: 'row',
  },
  deliverybox: {
    elevation: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.02,
    padding: width * 0.04,
    paddingHorizontal: width * 0.02,
  },
  delivery: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 12,
  },

  delivery2: {
    color: '#8B8B8B',
    fontSize: 10,
    ...FONTS.fourHundred,
  },
  editBox: {
    elevation: 7,
    borderRadius: 5,
    width: width * 0.18,
    height: height * 0.035,
    backgroundColor: COLORS.white,
    marginTop: height * 0.01,
  },

  edit: {
    ...FONTS.fiveHundred,
    fontSize: 8,
    color: '#4463B1',
    alignSelf: 'center',
    padding: width * 0.015,
  },

  box1: {
    marginTop: height * 0.018,
    elevation: 1,
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
  },
  border: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  text_offer: {
    color: '#00063F',
    fontSize: 10,
    ...FONTS.fourHundred,
    alignSelf: 'center',
    padding: width * 0.05,
  },
  saveorder: {
    color: '#222D8E',
    padding: width * 0.03,
    paddingLeft: width * 0.05,
  },

  Price_history: {
    color: '#909090',
    fontSize: 11,
    ...FONTS.fourHundred,
    padding: width * 0.05,
  },
  Price_history1: {
    fontSize: 11,
    ...FONTS.fourHundred,
    padding: width * 0.05,

    width: width * 0.74,
  },
  price_history2: {
    color: COLORS.black,
    paddingBottom: width * 0.01,
  },

  price_bottom: {
    elevation: 4,
    backgroundColor: COLORS.white,
    padding: width * 0.01,
  },
  price_bottom_rupeetext: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 18,
    marginBottom: height * -0.01,
    marginTop: height * 0.02,
    letterSpacing: 3,
  },
  price_bottom_text2: {
    color: '#3845B7',
    fontSize: 8,
  },
  marginLeft: {
    marginLeft: width * 0.1,
    marginRight: width * 0.22,
  },
  category: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 16,
    marginLeft: width * 0.02,
    margin: height * 0.02,
  },
  itemmiss: {
    backgroundColor: COLORS.White,
    elevation: 2,
    padding: width * 0.04,
    paddingTop: height * 0.01,
    marginTop: height * 0.015,
  },
});
