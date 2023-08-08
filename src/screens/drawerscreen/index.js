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
import Collapsible from 'react-native-collapsible';

// import {AuthFunction} from '../../redux/actions/authActions';
import styles from './styles';
import Brand2 from './../brand2';
import Categories2 from './../categories2';
import BlogALL from './../blogsall';
import VideoALL from './../videoall';
import Register from "./../registers";

const {width, height} = Dimensions.get('window');

const Categories = () => {
  const [isCollapsed, setcollapse] = useState('false');

  return (
    <View>
      <TouchableOpacity
      style={styles.flexDirection}
        onPress={() => {
          setcollapse(!isCollapsed);
        }}>
        <Text style={styles.draw_list_text}>Categories</Text>
        <Image  source={icons.collapsarrow}    style={styles.col_arrow}/>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <TouchableOpacity>
          <Text style={[styles.draw_list_text , {color:"black"}]}>collapsed item</Text>
        </TouchableOpacity>
      </Collapsible>
    </View>
  );
};

const Trend = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Trending</Text>
    </TouchableOpacity>
  );
};
const ShopBrand = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Shop Branded items</Text>
    </TouchableOpacity>
  );
};
const Favouriteitem = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Your favourite items</Text>
    </TouchableOpacity>
  );
};

const Myorders = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>My orders</Text>
    </TouchableOpacity>
  );
};
const Service = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Service</Text>
    </TouchableOpacity>
  );
};
const Notification = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Notification</Text>
    </TouchableOpacity>
  );
};
const Blog = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Blog</Text>
    </TouchableOpacity>
  );
};
const Videos = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Videos</Text>
    </TouchableOpacity>
  );
};
const Help = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Help</Text>
    </TouchableOpacity>
  );
};
const Privacy = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>Privacy & Policy</Text>
    </TouchableOpacity>
  );
};
const Aboutus = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>About us</Text>
    </TouchableOpacity>
  );
};
const Logout = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.draw_list_text}>logout</Text>
    </TouchableOpacity>
  );
};
const DrawerPage = ({navigation}) => {
  return (
    <View>
      <View style={styles.profile_box}>
        <TouchableOpacity style={styles.profile_img_box}>
          <Image source={images.profile} style={styles.profile_img} />
        </TouchableOpacity>
        <View>
          <Text style={styles.profile_text}>Hello,</Text>
          <Text style={styles.profile_text}>Someone</Text>
        </View>
      </View>
      <View style={styles.draw_list}>
        <Trend onPress={() => navigation.navigate('Categories2')} />
        <ShopBrand onPress={() => navigation.navigate('Brand2')} />
        <Favouriteitem />
        <Categories />
        <Myorders />
        <Service />
        <Notification />
        <Blog onPress={() => navigation.navigate('BlogALL')} />
        <Videos onPress={() => navigation.navigate('VideoALL')} />
        <Help />
        <Privacy />
        <Aboutus />
        <Logout  onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

export default DrawerPage;
