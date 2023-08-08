import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { COLORS ,SIZES} from "./../../constants/theme";
import { Carousel } from "react-native-snap-carousel";

const {width, height} = Dimensions.get('window');

const Input1 = ({placeholder,placeholderTextColor,secureTextEntry,keyboardType,}) => {
  return (
    <View style={styles.marginTop}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.input_box}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_box: {
    backgroundColor: COLORS.gray1,
    padding: width * 0.03,
    borderRadius: 10,
    marginBottom: height * 0.02,
    fontSize: 10,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular-400',
  },
});

export default Input1;
