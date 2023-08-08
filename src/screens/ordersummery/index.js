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
import {Numbering} from './../../component/bankpayment'
import {SelectAddresscart} from './../../component/card';
import {Addressbtn} from './../../component/Button';
import Payment from "./../payment";
const {width, height} = Dimensions.get('window');

const OrderSummary = ({navigation}) => {
  const [radioBtnid, setradioBtnid] = useState(1);
  const [incdecre, setincdecre] = useState(1);

  return (
    <View    style={{backgroundColor:"#F6F6F6", flex: 1}}>
  <StatusBar backgroundColor={"#00063F"} barStyle="light-content" />
    <ScrollView  showsVerticalScrollIndicator={false}>
       <View style={[styles.boxorder]}>
             <Numbering
          activeId={2}
        />
           </View>

      <View style={styles.Addressmain_box}>
        <View>
          <View style={styles.rowflex}>
            <Text style={styles.Delivery_address}>Deliver to </Text>
            <TouchableOpacity style={styles.editBox}>
              <Text style={styles.edit}>Change</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.select_addressbox}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.radio_box}>
                <View style={styles.innerradio_box}></View>
              </TouchableOpacity>

              <View style={styles.Textaddress_box}>
                <Text style={styles.address_1}>Pawan kumar</Text>
                <Text style={styles.address_2}>
                  Prem nagar near vbu hazaribagh, Jharkhand 825301
                </Text>
                <Text style={styles.address_2}>998XXXX679</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.order_box2}>
          <View style={styles.rowflex}>
            <TouchableOpacity>
              <Image source={images.detail1} style={styles.order_img} />
            </TouchableOpacity>
            <Text style={styles.order_text1}>
              XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster
              Circuit Board
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={[styles.order_text1, styles.order_Qty]}>Qty:</Text>
              <Text
                style={[
                  styles.order_text1,
                  styles.order_Qty,
                  {textDecorationLine: 'underline'},
                ]}>
                {incdecre}
              </Text>
              <View style={styles.plusminus_box}>
                <TouchableOpacity onPress={() => setincdecre(incdecre + 1)}>
                  <Text style={styles.order_plusminus}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (incdecre == 1) {
                      setincdecre(1);
                    } else {
                      setincdecre(incdecre - 1);
                    }
                  }}>
                  <Text style={styles.order_plusminus}>__</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.row, styles.rupeebox]}>
              <Text style={styles.order_rupee_text1}>₹140</Text>
              <Text style={styles.order_rupee_text2}>₹120</Text>
              <Text style={styles.order_rupee_text3}>14.3% off</Text>
            </View>
          </View>

          <View style={[styles.row, styles.bottom_box]}>
            <Text style={styles.order_rupee_bottomtext}>
              Delivery by Sun march 19 |
            </Text>
            <Text style={[styles.order_rupee_bottomtext, styles.free]}>
              Free Delivery
            </Text>
          </View>
        </View>

        <View style={styles.order_box2}>
          <View style={styles.row}>
            <Text style={styles.price_text}>Price</Text>
            <Text style={styles.price_text}>₹ 80</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price_text}>Discount price</Text>
            <Text style={[styles.price_text, styles.price_textcolor]}>₹ 0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price_text}>Coupon price</Text>
            <Text style={styles.price_text}>₹ 0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price_text}>Total item</Text>
            <Text style={styles.price_text}>1</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price_text}>Delivery Fee</Text>
            <Text style={styles.price_text}>₹ 40</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price_text}>Total price</Text>
            <Text style={styles.price_text}>₹ 120</Text>
          </View>
        </View>

        <View style={[styles.row, styles.secure_box]}>
          <Image source={images.secure} style={styles.secure_img} />
          <Text style={styles.securepyment}>
            Safe and secure payments. Easy returns. 100% authentic product
          </Text>
        </View>
      </View>
    </ScrollView>
       <View style={[styles.row, styles.price_bottom]}>
        <View style={styles.marginLeft}>
          <Text style={styles.price_bottom_text1}>₹ 120</Text>
          <TouchableOpacity>
            <Text style={styles.price_bottom_text2}>View price detail</Text>
          </TouchableOpacity>
        </View>

        <Addressbtn   children="Continue" onPress={()=>navigation.navigate('Payment')}/>
      </View>

            
  </View>
  );
};

export default OrderSummary;
