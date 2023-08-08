import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  sorry_box: {

    alignItems: 'center',
    textAlign: 'center',
    marginTop: height * 0.45,
  },
  sorry_interruption: {
    fontFamily: 'Poppins-Bold-700',
    color:"#232323",
    fontSize:20
  },
  Loading: {
       fontFamily: 'Poppins-Regular-400',
    color:"#232323",
    fontSize:12

  },
  loadiconset: {
   flexDirection: 'row',
  },
  loadicon:{
    color:"#232323",
  }
});
