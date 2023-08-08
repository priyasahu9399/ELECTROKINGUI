import React from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import {icons, images} from './../../constants';
import styles from './styles';

const {width, height} = Dimensions.get('window');

export const Button1 = ({children, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={.6}  style={styles.touch_btn} onPress={onPress}>
      <Text style={styles.btn_text}>{children}</Text>
    </TouchableOpacity>
  );
};

export const Googlebtn = ({children, onPress}) => {
  return (
    <View>
      <TouchableOpacity
      activeOpacity={.6} 
        onPress={onPress}
        style={[styles.Google_box, styles.flex_row]}>
        <Image source={icons.google} style={styles.google_icon} />
        <Text style={styles.google}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};


export const Addressbtn = ({children, onPress}) => {
  return (
    <TouchableOpacity  activeOpacity={.6}   style={styles.touch_Addressbtn} onPress={onPress}>
      <Text style={styles.btn_text}>{children}</Text>
    </TouchableOpacity>
  );
};
// export default {Button1, Googlebtn};


