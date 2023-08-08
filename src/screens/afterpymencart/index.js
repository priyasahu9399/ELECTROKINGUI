import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
// import {connect} from 'react-redux';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
// import {AuthFunction} from '../../redux/actions/authActions';
import styles from './styles';
import {data} from '../../constants';
import {
  CartsComponent,
  RecommendedCart,
  CartsCARTS,
} from './../../component/card';
import {Numbering} from './../../component/bankpayment';
import {SelectAddresscart} from './../../component/card';
import {Addressbtn} from './../../component/Button';
import Payment from './../payment';
import OneCarts from './../CARTS/index';
import SelectAddress from './../afterpymencart'
import Details from "./../details/index";

const {width, height} = Dimensions.get('window');

const AfterPayment = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={"#00063F"}  barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pyment_box}>
          <View style={[styles.deliverybox, styles.pymentrowflex]}>
            <View style={{paddingHorizontal: width * 0.03}}>
              <Text style={styles.delivery}>
                Deliver to : Pawan kumar, 825301
              </Text>
              <Text style={styles.delivery2}>
                Bjp Building,prem nagar near shiv .....
              </Text>
            </View>

            <TouchableOpacity style={styles.editBox}>
              <Text style={styles.edit}>Change</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={data.CartsCARTSdata}
            renderItem={({item}) => (
              <CartsCARTS
                src={item.src}
                carttext1={item.carttext1}
                carttext2={item.carttext2}
                carttext3={item.carttext3}
                carttext4={item.carttext4}
              />
            )}
          />
          {/* <View style={styles.pymentorder_box2}>
            <View style={styles.pymentrowflex}>
              <TouchableOpacity>
                <Image source={images.detail1} style={styles.pymentorder_img} />
              </TouchableOpacity>
              <Text style={styles.pymentorder_text1}>
                XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster
                Circuit Board
              </Text>
            </View>

            <View style={[styles.pymentrowflex,{marginBottom:height*0.01}]}>
              <View style={styles.pymentrowflex}>
                <Text
                  style={[styles.pymentorder_text1, styles.pymentorder_Qty]}>
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
                    <Text style={styles.pymentorder_plusminus}>__</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={[styles.pymentrowflex
              , styles.pymentrupeebox]}>
                <Text style={styles.pymentorder_rupee_text1}>₹ 192</Text>
                <Text style={styles.pymentorder_rupee_text2}>₹ 120</Text>
                <Text style={styles.pymentorder_rupee_text3}>60% off</Text>
              </View>
            </View>

            <View style={styles.border}></View>
            <View style={styles.pymentrow_between}>
              <TouchableOpacity style={styles.pymentrowflex}>
                <Image source={icons.deleteicon} style={styles.deleteicon} />
                <Text style={styles.remove_buy}>Remove</Text>
              </TouchableOpacity>
              <View style={styles.borderRight}></View>
              <TouchableOpacity>
                <Text style={styles.remove_buy}>Buy Now</Text>
              </TouchableOpacity>
            </View>
     </View> */}
        </View>

        <View style={styles.box1}>
          <Text style={styles.Price_history}>Price history</Text>
          <View style={styles.border}>
            <View style={styles.pymentrowflex}>
              <Text style={[styles.Price_history1, styles.price_history2]}>
                Price (4 item)
              </Text>
              <Text style={[styles.Price_history, styles.price_history2]}>
                ₹480
              </Text>
            </View>

            <View style={styles.pymentrowflex}>
              <Text style={[styles.Price_history1, styles.price_history2]}>
                Discount charge
              </Text>
              <Text style={[styles.Price_history, styles.price_history2]}>
                ₹150
              </Text>
            </View>

            <View style={styles.pymentrowflex}>
              <Text style={[styles.Price_history1, styles.price_history2]}>
                Delivery Charge
              </Text>
              <Text style={[styles.Price_history, styles.price_history2]}>
                ₹40
              </Text>
            </View>
          </View>

          <View style={styles.pymentrowflex}>
            <Text style={[styles.Price_history1, styles.price_history2]}>
              Total amount
            </Text>
            <Text style={[styles.Price_history, styles.price_history2]}>
              ₹370
            </Text>
          </View>
          <View style={styles.border}>
            <Text style={[styles.Price_history1, styles.saveorder]}>
              You will save ₹150 on this order
            </Text>
          </View>
        </View>

        {/* Items for you*/}
        <View style={[styles.itemmiss, {backgroundColor: 'white'}]}>
          <Text style={styles.category}>Items you may have miss</Text>
          <View>
            <FlatList
              data={data.RecommendedCartdata.slice(0, 2)}
              numColumns={2}
              renderItem={({item}) => (
                <RecommendedCart
                                    onPress={() => navigation.navigate('Details')}

                  source={images.kidtier}
                  icon={icons.recom_icon}
                  title1="Robot Kits and Parts"
                  title2=" M5STACK BALA-C ESP32 Development"
                  title3="SKU: 945397"
                  title4="(874)"
                  title5="₹ 4500.00"
                />
              )}
            />
          </View>
          <Text style={styles.category}>Mostly viewd items</Text>
          <View style={{backgroundColor: 'white'}}>
            <FlatList
              data={data.RecommendedCartdata.slice(0, 2)}
              numColumns={2}
              renderItem={({item}) => (
                <RecommendedCart
                   onPress={() => navigation.navigate('Details')}

                  source={images.kidtier}
                  icon={icons.recom_icon}
                  title1="Robot Kits and Parts"
                  title2=" M5STACK BALA-C ESP32 Development"
                  title3="SKU: 945397"
                  title4="(874)"
                  title5="₹ 4500.00"
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.pymentrowflex,
          styles.price_bottom,
        ]}>
        <View style={styles.marginLeft}>
          <Text style={styles.price_bottom_rupeetext}>₹ 370</Text>
          <TouchableOpacity>
            <Text style={styles.price_bottom_text2}>View price detail</Text>
          </TouchableOpacity>
        </View>
        <Addressbtn
          children="Place order"
          onPress={() => navigation.navigate('SelectAddress')}
        />
      </View>
    </View>
  );
};

export default AfterPayment;
