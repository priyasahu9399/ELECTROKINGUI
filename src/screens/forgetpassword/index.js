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

const ForgetPassword = ({navigation}) => {
  return (
    <View style={styles.flexonebox}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.padding}>
        <View style={styles.relative}>
          <Image source={images.forgetimg} style={styles.loginimg} />

          <Text style={styles.Forget_text}>Forget password </Text>
        </View>

        <View style={styles.marginTop}>
          <Text style={styles.input_label}>Enter Email/mobile </Text>

          <TextInput
            placeholder="Email/mobile no"
            placeholderTextColor="#5B5B5B"
            style={styles.input_box}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.term_condition, styles.forget]}>
            Back to login page
          </Text>
        </TouchableOpacity>
      </View>

      <Button1   onPress={() => navigation.navigate('ResetPassword')}> Send OTP</Button1>

      <View style={styles.googlemarginTop}>
        <Googlebtn />
      </View>

      <View style={[styles.flex_row, styles.loginhere]}>
        <Text style={styles.term_condition}>Don’t have an account ?? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.term_condition, {color: COLORS.blue}]}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;
