import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import {AuthFunction} from '../../redux/actions/authActions';
import Input1 from './../../component/input';
import styles from './styles';
import {Button1, Googlebtn} from './../../component/Button';
import Login from "./../login";
import Register from "./../registers";
import ResetPassword from "./../resetpassword";
const {width, height} = Dimensions.get('window');

const OTP = ({navigation}) => {
  return (
    <View style={styles.flexonebox}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
     
      <View style={styles.padding}>
      
        <View style={styles.relative}>
          <Image source={images.forgetimg} style={styles.loginimg} />
        </View>
        
        </View>

</View>


  )}


  export default OTP;