import React from 'react';
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
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import styles from './styles';
import {Profilecart} from './../../component/card';
import Details from './../details';
import Register from './../registers';
import DeliveryAddress from './../profiledeliveryaddress';

const {width, height} = Dimensions.get('window');

const Profile = ({navigation}) => {
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={styles.profile_container}>
        <View style={styles.profile_img_container}>
          <TouchableOpacity activeOpacity={0.8} style={styles.profile_img_box}>
            <Image source={images.profile_img} style={styles.profile_img} />
          </TouchableOpacity>

          <Text style={styles.profile_text}>Hello, Someone</Text>
        </View>
        <View>
          <Profilecart
            pro_icon={icons.pro1}
            profile_text="Personal Information"
            arrow={icons.arrow}
            style={styles.pro_icon}
          />
          <Profilecart
            style={styles.pro_icon}
            pro_icon={icons.pro2}
            profile_text="Order"
            arrow={icons.arrow}
          />
          <Profilecart
            style={styles.pro_icon_location}
            pro_icon={icons.pro3}
            profile_text="Delivery Address"
            arrow={icons.arrow}
            onPress={() => navigation.navigate('DeliveryAddress')}
          />
          <Profilecart
            style={styles.pro_icon_heart}
            pro_icon={icons.heart}
            profile_text="WishList"
            arrow={icons.arrow}
          />

          <Profilecart
            style={styles.pro_icon}
            pro_icon={icons.pro5}
            profile_text="Offer"
            arrow={icons.arrow}
          />
          <Profilecart
            style={styles.pro_icon}
            pro_icon={icons.pro1}
            profile_text="Contact us"
            arrow={icons.arrow}
          />
          <Profilecart
            style={styles.pro_icon}
            pro_icon={icons.pro6}
            profile_text="Logout"
            arrow={icons.arrow}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
