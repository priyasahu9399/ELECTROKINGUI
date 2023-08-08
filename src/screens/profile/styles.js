import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  profile_container: {padding: width * 0.06},

  profile_img: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 80,
  },
  profile_img_container: {
    alignSelf: 'center',
  },
  profile_img_box: {
    width: width * 0.3,
    height: height * 0.153,
    borderRadius: 80,
    elevation: 6,
    backgroundColor: '#96B2FE',
    // borderWidth:1,
  },

  profile_text: {
    padding: width * 0.02,
    color: COLORS.black,
    fontSize: 12,
    ...FONTS.sixHundred,
  },
  pro_icon_location:{
    width: width * 0.047,
    height: height * 0.03,
    marginLeft: width * 0.05,
   
  },
  pro_icon_heart:{
     width: width * 0.06,
    height: height * 0.027,
    marginLeft: width * 0.05,
    tintColor: '#444444'
  },
  pro_icon: {
    width: width * 0.06,
    height: height * 0.03,
    marginLeft: width * 0.05,
  
  },
});
