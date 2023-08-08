import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {data} from '../../constants';
import Stars from 'react-native-stars';
import styles from './styles';
import {
  CartsComponent,
  RecommendedCart,

} from './../../component/card';
import RecommendedAll from "./../recommendedall";
import Details from "./../details/index";

const {width, height} = Dimensions.get('window');

const Brand2 = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={"#00063F"} barStyle="light-content" />
        <ScrollView   showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.elevation}>
          <Image source={images.adafruit} style={styles.main_img} />
        </TouchableOpacity>

        <View style={{padding: width * 0.04}}>
          {/* Recommended Items*/}
          <View>
            <View style={styles.flex_row}>
              <Text style={styles.category}>Most popular items</Text>
            </View>
            <View>
              <FlatList
                data={data.RecommendedCartdata}
                numColumns={2}
                renderItem={({item}) => (
                  <RecommendedCart
                     onPress={() => navigation.navigate('Details')}

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
         
        </View>
      </ScrollView>
    </View>
  );
};

export default Brand2;
