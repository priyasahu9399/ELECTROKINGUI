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
import ForgetPassword from "./../forgetpassword";
import Register from "./../registers";
const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {

  const [showpassword, setShowpassword] = useState(true);
  const [visible, setvisible] = useState(true);

  return (
    <View style={styles.flexonebox}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.padding}>
        <View style={styles.relative}>
          <Image source={images.loginimg} style={styles.loginimg} />

          <Image source={images.loginking} style={styles.loginking} />
        </View>

        <View style={styles.marginTop}>
          <View style={styles.relative}>
            <Text style={styles.input_label}>Email address</Text>
            <Input1
              placeholder="Abc@gmail.com"
              placeholderTextColor="#5B5B5B"
            />
            <TouchableOpacity
              style={[styles.greenabsolute, styles.rightgreenbackground]}>
              <Image source={icons.right} style={styles.greenicon} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.input_label}>Password</Text>
            <Input1
              placeholder="Atleast 6 character"
              placeholderTextColor="#5B5B5B"
              secureTextEntry={visible}
            />
            <TouchableOpacity
              onPress={() => {
                setShowpassword(!showpassword);
                setvisible(!visible);
              }}
              style={styles.eyeicon1_set} >
              <Image source={icons.eye} style={styles.eyeicon_width} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={[styles.term_condition, styles.forget]}>
              Forget password
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Button1> Login </Button1>
        </View>

        <View>
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
    </View>
  );
};

export default Login;
