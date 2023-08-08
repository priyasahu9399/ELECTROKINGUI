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
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {data} from '../../constants';
import {
  CartsComponent,
  RecommendedCart,
  ServiceCart,
  Blogcart,
  Videocart,
  AllBlogcart,
} from './../../component/card';

import styles from './styles';
const {width, height} = Dimensions.get('window');

const BlogALL = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
  <StatusBar backgroundColor={"#00063F"}  barStyle="light-content" />
        <ScrollView   showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Image source={images.homemain} style={styles.main_img} />
        </TouchableOpacity>
        <View style={styles.padding}>
          {/* Trending Blogs */}
          <View>
            <Text style={styles.category}>Trending Blogs</Text>
            <FlatList
              data={data.AllBlogcartdata}
              renderItem={({item}) => (
                <AllBlogcart
                  Blogcarttext={item.Blogcarttext}
                  Blogcartimages={item.Blogcartimages}
                />
              )}
            />
          </View>
          {/* Development Board */}
          <View>
            <Text style={styles.category}>Development Board</Text>
            <FlatList
              data={data.AllBlogcartdata}
              renderItem={({item}) => (
                <AllBlogcart
                  Blogcarttext={item.Blogcarttext}
                  Blogcartimages={item.Blogcartimages}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BlogALL;
