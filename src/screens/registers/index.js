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
import CheckBox from 'react-native-check-box';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import {AuthFunction} from '../../redux/actions/authActions';
import Input1 from './../../component/input';
import styles from './styles';
import {Button1, Googlebtn} from './../../component/Button';
import Login from "./../login";
const {width, height} = Dimensions.get('window');

const Register = ({navigation}) => {
  const [isSelected, setisSelected] = useState(false);

  
  const [showpassword, setShowpassword] = useState(true);
  const [visible, setvisible] = useState(true);

  return (
    <View style={styles.flexonebox}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.padding}>
        <Text style={[styles.welcome, styles.center]}>Welcome to</Text>
        <View style={styles.center}>
          <Image source={images.loginking} style={styles.loginking} />
        </View>

        <View style={styles.marginTop}>
          <Text style={styles.input_label}>Full name</Text>
          <View>
            <Input1 placeholder="Name" placeholderTextColor="#5B5B5B" />
          </View>

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
              style={styles.eyeicon1_set}>
              <Image source={icons.eye} style={styles.eyeicon_width} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.flex_row}>
          <TouchableOpacity>
            <CheckBox
              isChecked={!isSelected}
              onClick={() => setisSelected(!isSelected)}
              checkedCheckBoxColor={COLORS.orange}
              rightTextView={
                <View style={styles.flex_row}>
                  <Text style={styles.term_condition}> Agree with </Text>
                  <TouchableOpacity>
                    <Text style={[styles.term_condition, {color: COLORS.blue}]}>
                      Term & Condition
                    </Text>
                  </TouchableOpacity>
                </View>
              }
              style={{borderRadius: 20}}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Button1 onPress={() => navigation.navigate('Login')}>
            Register
          </Button1>
        </View>

        <View>
          <Googlebtn />
        </View>

        <View style={[styles.flex_row, styles.loginhere]}>
          <Text style={styles.term_condition}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.term_condition, {color: COLORS.blue}]}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
