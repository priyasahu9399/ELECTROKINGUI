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
import styles from './styles';
import {data} from './../../constants';
import {
  Bankoffer,
  Allothercoupons,
  Numbering,
} from './../../component/bankpayment';
import {Addressbtn} from './../../component/Button';
const {width, height} = Dimensions.get('window');

const Payment = () => {
  const [radioBtnid, setradioBtnid] = useState(1);
  return (
    <View style={{backgroundColor: '#F6F6F6', flex: 1}}>
      <StatusBar backgroundColor={"#00063F"} barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pyment_container}>
          <View style={styles.boxorder}>
            <Numbering activeId={3} />
          </View>

          <View style={styles.box1}>
            <Bankoffer
              src={images.Bajaj}
              text1="No Cost EMI on Bajaj Finserv EMI Card on cart value aboue ₹150"
            />
            <Bankoffer
              src={images.ici}
              text1="No Cost EMI on ICICI Bank EMI Card on cart value aboue ₹150"
            />
            <View style={styles.border}></View>
            <TouchableOpacity>
              <Text style={styles.text_offer}>View All Offers</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.box1, {paddingBottom: height * 0.04}]}>
            <View>
              <Text style={styles.all_coupons}>All other Coupon</Text>
              <View style={styles.border}></View>
              <FlatList
                data={data.Allothercouponsdata}
                renderItem={({item}) => (
                  <Allothercoupons
                    banksrc={item.banksrc}
                    bank_text={item.bank_text}
                    bank_text2={item.bank_text2}
                    onPress={() => setradioBtnid(item.id)}
                    checked={radioBtnid == item.id ? true : false}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.box1}>
            <Text style={styles.Price_history}>Price history</Text>
            <View style={styles.border}>
              <View style={styles.flex_row}>
                <Text style={[styles.Price_history1, styles.price_history2]}>
                  Price (1 item)
                </Text>
                <Text style={[styles.Price_history, styles.price_history2]}>
                  ₹80
                </Text>
              </View>

              <View style={styles.flex_row}>
                <Text style={[styles.Price_history1, styles.price_history2]}>
                  Delivery Charge
                </Text>
                <Text style={[styles.Price_history, styles.price_history2]}>
                  ₹40
                </Text>
              </View>
            </View>

            <View style={styles.flex_row}>
              <Text style={[styles.Price_history1, styles.price_history2]}>
                Total amount
              </Text>
              <Text style={[styles.Price_history, styles.price_history2]}>
                ₹120
              </Text>
            </View>
          </View>

          <View style={styles.box2}>
            <FlatList
              data={data.paymentappdata}
              numColumns={4}
              renderItem={({item}) => (
                <View style={styles.pyment_app_box}>
                  <Image source={item.img} style={styles.payment_image} />
                </View>
              )}
            />
          </View>

        </View>
      </ScrollView>
      <View style={[styles.flex_row, styles.price_bottom]}>
            <View style={styles.marginLeft}>
              <Text style={styles.price_bottom_rupeetext}>₹ 120</Text>
              <TouchableOpacity>
                <Text style={styles.price_bottom_text2}>View price detail</Text>
              </TouchableOpacity>
            </View>
            <Addressbtn children="PAY NOW" />
          </View>
    </View>
  );
};

export default Payment;
