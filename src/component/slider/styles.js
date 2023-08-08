
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  imgmainbox: {
    width: width * 0.83,
    
  },
  imagestyle: {
    height: height * 0.18,
    width: width * 0.72,
    margin:width * 0.1,
    alignSelf: 'center',

  },
  dotbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: width * 0.8,
  },
  dotstyle: {
    height: height * 0.013,
    margin: width * 0.02,
    borderWidth: 1,
    borderRadius: 6,
    width: width * 0.026,
  },
});
