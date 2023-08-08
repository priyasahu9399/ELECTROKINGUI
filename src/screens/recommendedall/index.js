import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {data} from '../../constants';
import Stars from 'react-native-stars';
import styles from './styles';
import {
  // CartsComponent,
  RecommendedCart,
  // ServiceCart,
  // Blogcart,
  // Videocart,
} from './../../component/card';
const {width, height} = Dimensions.get('window');

const RecommendedAll = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={"#00063F"} barStyle='light-content' />
      <ScrollView   showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.elevation}>
          <Image source={images.homemain} style={styles.main_img} />
        </TouchableOpacity>

        {/* Trending  Items*/}
        <View style={styles.padding}>
          <Text style={styles.category}>Trending items</Text>
          <View>
            <FlatList
              data={data.RecommendedCartdata}
              numColumns={2}
              renderItem={({item}) => (
                <RecommendedCart
                  source={images.kidtier}
                  icon={icons.recom_icon}
                  title1="Robot Kits and Parts"
                  title2="M5STACK BALA-C ESP32 Development"
                  title3="SKU: 945397"
                  title4="(874)"
                  title5="₹ 4500.00"
                />
              )}
            />
          </View>
        </View>

        {/* Items for you*/}
        <View style={styles.padding}>
          <Text style={styles.category}>Items for you</Text>
          <View>
            <FlatList
              data={data.RecommendedCartdata}
              numColumns={2}
              renderItem={({item}) => (
                <RecommendedCart
                  source={images.kidtier}
                  icon={icons.recom_icon}
                  title1="Robot Kits and Parts"
                  title2="M5STACK BALA-C ESP32 Development"
                  title3="SKU: 945397"
                  title4="(874)"
                  title5="₹ 4500.00"
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecommendedAll;
