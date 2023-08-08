import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
// import {connect} from 'react-redux';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
// import {AuthFunction} from '../../redux/actions/authActions';
import styles from './styles';
// import {data} from '../../constants';
import {data} from '../../constants';
import {
  CartsComponent,
  RecommendedCart,
  ServiceCart,
  Blogcart,
  Videocart,
  CartsCARTS,
} from './../../component/card';
import {Numbering} from './../../component/bankpayment';
import {SelectAddresscart} from './../../component/card';
import {Addressbtn} from './../../component/Button';
import Payment from './../payment';
const {width, height} = Dimensions.get('window');

const OneCarts = ({navigation}) => {
  const [incdecre, setincdecre] = useState(1);

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <StatusBar backgroundColor={"#00063F"}  barStyle="light-content" />
      <View style={styles.pymentorder_box2}>
        <View style={styles.pymentrowflex}>
          <TouchableOpacity>
            <Image source={images.detail1} style={styles.pymentorder_img} />
          </TouchableOpacity>
          <View>
            <Text style={styles.pymentorder_text1}>
              XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster
              Circuit Board
            </Text>
            <View style={styles.pymentrowflex}>
              <Text style={[styles.pymentorder_text1, styles.pymentorder_Qty]}>
                Qty :
              </Text>
              <Text
                style={[
                  styles.pymentorder_text1,
                  styles.pymentorder_Qty,
                  styles.number1,
                ]}>
                {incdecre}
              </Text>
              <View style={styles.pymentplusminus_box}>
                <TouchableOpacity onPress={() => setincdecre(incdecre + 1)}>
                  <Text style={styles.pymentorder_plusminus}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (incdecre == 1) {
                      setincdecre(1);
                    } else {
                      setincdecre(incdecre - 1);
                    }
                  }}>
                  <Text style={[styles.pymentorder_plusminus, styles.subtract]}>
                    __
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.pymentorder_box2}>
        <Text style={styles.newCoupon}>Apply new Coupon</Text>

        <View style={styles.applybox_row}>
          <TextInput
            placeholder="Enter coupon code"
            placeholderTextColor="#C1C1C1"
            style={styles.enter_code}
          />
          <TouchableOpacity style={styles.applybox}>
            <Text style={styles.apply}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.pymentorder_box2, styles.box_3]}>
        <View style={styles.pymentrowflex}>
          <Text style={styles.price_text}>Price</Text>
          <Text style={styles.price_text}>₹ 80</Text>
        </View>
        <View style={styles.pymentrowflex}>
          <Text style={styles.price_text}>Discount price</Text>
          <Text style={[styles.price_text, styles.price_textcolor]}>₹ 0</Text>
        </View>
        <View style={styles.pymentrowflex}>
          <Text style={styles.price_text}>Coupon price</Text>
          <Text style={styles.price_text}>₹ 0</Text>
        </View>
        <View style={styles.pymentrowflex}>
          <Text style={styles.price_text}>Total item</Text>
          <Text style={styles.price_text}>1</Text>
        </View>
        <View style={styles.pymentrowflex}>
          <Text style={styles.price_text}>Delivery Fee</Text>
          <Text style={styles.price_text}>₹ 40</Text>
        </View>
        <View style={styles.pymentrowflex}>
          <Text style={[styles.price_text, styles.bold]}>Total price</Text>
          <Text style={[styles.price_text, styles.bold]}>₹ 120</Text>
        </View>
      </View>

      <TouchableOpacity 
      onPress={()=>navigation.navigate('SelectAddress')}
      style={styles.Placeorder_box}>
        <Text style={styles.Placeorder}>Place order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OneCarts;
