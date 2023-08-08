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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {data} from '../../constants';
import Stars from 'react-native-stars';
import styles from './styles';
import {
  CartsComponent,
  //   RecommendedCart,
  //   ServiceCart,
  //   Blogcart,
  //   Videocart,
} from './../../component/card';

const {width, height} = Dimensions.get('window');

const CategoriesAll = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={"#00063F"}  barStyle="light-content" />
      <ScrollView   showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Image source={images.homemain} style={styles.main_img} />
        </TouchableOpacity>
        <View style={{padding: width * 0.04}}>
          {/* categories*/}
          <View>
            <View style={styles.flex_row}>
              <Text style={styles.category}>Categories</Text>
            </View>
            <View>
              <FlatList
                data={data.carddata}
                numColumns={2}
                renderItem={({item}) => (
                  <CartsComponent
                    src={images.categorie}
                    text1={'Development'}
                    text2={'Boards'}
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

export default CategoriesAll;
