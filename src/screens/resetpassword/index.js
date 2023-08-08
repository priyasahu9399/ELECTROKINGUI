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
import Login from './../login';
import Register from './../registers';
import BottomTab from "./../../navigation/BottomTabNavigator";
const {width, height} = Dimensions.get('window');

const ResetPassword = ({navigation}) => {

  const [showpassword, setShowpassword] = useState(true);
  const [visible, setvisible] = useState(true);


  const [showpassword2, setShowpassword2] = useState(true);
  const [visible2, setvisible2] = useState(true);

  return (
    <View style={styles.flexonebox}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <ScrollView> */}
      <View style={styles.padding}>
        <View style={styles.relative}>
          <Image source={images.resetimg} style={styles.loginimg} />

          <Text style={styles.Forget_text}>Reset password </Text>

          <View style={styles.absoltepositon}>
            <Text style={styles.input_label}>New password</Text>
            <TextInput
              placeholder="Enter New password"
              secureTextEntry={visible}
              placeholderTextColor="#818181"
              style={styles.input_box}
            />
            <TouchableOpacity
              onPress={() => {
                setShowpassword(!showpassword);
                setvisible(!visible);
              }}
              style={styles.eyeicon1_set}>
              <Image source={icons.eye} style={styles.eyeicon_width} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.set_btn, styles.relative]}>
          <Text style={styles.input_label}>confirm new password</Text>
          <TextInput
            placeholder="Confirm  password"
            secureTextEntry={visible2}
            placeholderTextColor="#818181"
            style={styles.input_box}
          />
          <TouchableOpacity
            onPress={() => {
              setShowpassword2(!showpassword2);
              setvisible2(!visible2);
            }}
            style={styles.eyeicon1_set}>
            <Image source={icons.eye} style={styles.eyeicon_width} />
          </TouchableOpacity>
        </View>
      </View>

      <Button1
      //  onPress={() => navigation.navigate('BottomTab')}
      >Submit</Button1>

      <View style={[styles.flex_row, styles.loginhere]}>
        <Text style={styles.term_condition}>Don’t have an account ? ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.term_condition, {color: COLORS.blue}]}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default  ResetPassword;
