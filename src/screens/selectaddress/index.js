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
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import styles from './styles';
import {data} from '../../constants';
import {SelectAddresscart} from './../../component/card';
import {Numbering} from '../../component/bankpayment';
import OrderSummary from './../ordersummery';
const {width, height} = Dimensions.get('window');

const SelectAddress = ({navigation}) => {
  const [radioBtnid, setradioBtnid] = useState();

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={"#00063F"} barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: COLORS.white, flex: 1}}>
        <View style={styles.boxorder}>
          <Numbering activeId={1} />
        </View>

        <View style={styles.Addressmain_box}>
          <Text style={styles.Delivery_address}>Select Delivery address</Text>
          <TouchableOpacity style={styles.address_box}>
            <View style={styles.plus_Box}>
              <Image source={icons.plus} style={styles.plus} />
            </View>
            <Text style={styles.new_address}>Add a new address</Text>
          </TouchableOpacity>

          <FlatList
            data={data.SelectAddressdata}
            renderItem={({item}) => (
              <SelectAddresscart
                address_text1={item.address_text1}
                address_text2={item.address_text2}
                address_text3={item.address_text3}
                address_text4={item.address_text4}
                onPress={() => setradioBtnid(item.id)}
                checked={radioBtnid == item.id ? true : false}
                active={
                  radioBtnid == item.id
                    ? navigation.navigate('OrderSummary')
                    : null
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectAddress;
