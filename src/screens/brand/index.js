import React, {useEffect, useRef} from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {data} from '../../constants';
import Stars from 'react-native-stars';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const BrandALL = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
  <StatusBar backgroundColor={"#00063F"}  barStyle="light-content" />
        <ScrollView   showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Image source={images.homemain} style={styles.main_img} />
        </TouchableOpacity>

        {/* Our Favourite Brand  */}
        <View style={styles.padding}>
          <Text style={styles.category}>Our Favourite Brand </Text>
          <FlatList
            data={data.Brandlist}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.padding}>
                <Image source={item.Brand} style={styles.brand_img} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BrandALL;
