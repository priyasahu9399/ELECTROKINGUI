import React, {useState, useRef} from 'react';
import Stars from 'react-native-stars';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {Allothercouponsdata} from '../../constants/data';

import styles from './styles';

const Bankoffer = ({src, text1}) => {
  return (
    <TouchableOpacity style={styles.row_line}>
      <Image source={src} style={styles.bajaj_icon} />
      <Text style={styles.bajaj_text}>{text1} </Text>
      <Image source={icons.arrow} style={styles.arrow_icon} />
    </TouchableOpacity>
  );
};


const Allothercoupons = ({banksrc,bank_text, bank_text2,onPress,checked})=>{
  return(
       <TouchableOpacity style={[styles.flex_row , styles.padding]}
       onPress={onPress}
       >
           {
            checked &&  
            <TouchableOpacity style={styles.pyment_radio_box}>
            <View style={styles.pyment_innerradio_box}></View>
          </TouchableOpacity> 
          ||
           <TouchableOpacity style={[styles.pyment_radio_box , {borderColor:"#929292"}]}>
          </TouchableOpacity>
           }
          <View>
            <Text  style={styles.coupon}>{bank_text}</Text>
           <Text  style={styles.bank_text2}>{bank_text2}</Text>
          </View>
          <Image  source={banksrc}   style={styles.pytm_icon}/>
        </TouchableOpacity>
  )
};

const Numbering = ({activeId}) =>{
  
  return(
    <View style={styles.address_row}>
          <TouchableOpacity
           style={[styles.num_box, activeId == 1 && {backgroundColor:"#4463B1"} ]} 
           >
            <Text style={styles.number}>1</Text>
            <Text style={styles.num_text}>Address</Text>
          </TouchableOpacity>
          <View style={styles.dash_border}></View>
          <TouchableOpacity    style={[styles.num_box, activeId == 2 && {backgroundColor:"#4463B1"} ]}>
            <Text style={styles.number}>2</Text>
            <Text style={[styles.num_text , styles.order]}>order summery</Text>
          </TouchableOpacity>
          <View style={styles.dash_border}></View>
          <TouchableOpacity    style={[styles.num_box, activeId == 3 && {backgroundColor:"#4463B1"} ]}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.num_text}>Payment</Text>
          </TouchableOpacity>
        </View>
  )
}
 


export  {Bankoffer , Allothercoupons,Numbering};
