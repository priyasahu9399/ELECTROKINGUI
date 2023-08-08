import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  // FlatList,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
// import VideoPlayer from 'react-native-video-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {data} from '../../constants';
import Stars from 'react-native-stars';
// import Video from 'react-native-video';
import styles from './styles';
import { FlatList } from "react-native-gesture-handler";

import {
  CartsComponent,
  RecommendedCart,
  ServiceCart,
  Blogcart,
  // Videocart,
} from './../../component/card';
import CategoriesAll from './../categorieall';
import RecommendedAll from './../recommendedall';
import BlogALL from './../blogsall';
import VideoALL from './../videoall';
import BrandALL from './../brand';
import Details from './../details';
const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [heartimg, setheartimg] = useState();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={"#00063F"} barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Image source={images.homemain} style={styles.main_img} />
        </TouchableOpacity>

        <View style={{padding: width * 0.04}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.homelist}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.list_boxitems}>
                <Text style={styles.list_text}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />

          {/* categories*/}
          <View>
            <View style={styles.flex_row}>
              <Text style={styles.category}>Categories</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('CategoriesAll')}>
                <Text style={styles.seeall}>See All</Text>
              </TouchableOpacity>
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

          {/* Recommended Items*/}
          <View>
            <View style={styles.flex_row}>
              <Text style={styles.category}>Recommended Items</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RecommendedAll')}>
                <Text style={styles.seeall}>See All</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={data.RecommendedCartdata}
                numColumns={2}
                renderItem={({item}) => (
                  <RecommendedCart
                    // active={heartimg === item.id ? }
                    onPress={() => navigation.navigate('Details')}
                    // hearticon={item.hearticon}
                    source={images.kidtier}
                    icon={icons.recom_icon}
                    title1={item.title1}
                    title2={item.title2}
                    title3={item.title3}
                    title4={item.title4}
                    title5={item.title5}
                  />
                )}
              />
            </View>
          </View>
          {/* Items for you*/}
          <View>
            <Text style={styles.category}>Items for you</Text>
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
                    title2=" M5STACK BALA-C ESP32 Development"
                    title3="SKU: 945397"
                    title4="(874)"
                    title5="₹ 4500.00"
                  />
                )}
              />
            </View>
          </View>
          {/* services*/}
          <View>
            <Text style={styles.category}>Services</Text>
            <View>
              <FlatList
                data={data.ServiceCartdata}
                renderItem={({item}) => (
                  <ServiceCart text={item.text} src={item.src} />
                )}
              />
            </View>
          </View>
          {/* blog */}
          <View>
            <View style={styles.flex_row}>
              <Text style={styles.category}>Blogs</Text>
              <TouchableOpacity onPress={() => navigation.navigate('BlogALL')}>
                <Text style={styles.seeall}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={data.Blogcartdata}
              renderItem={({item}) => (
                <Blogcart blogtext={item.blogtext} images={images.balance} />
              )}
            />
          </View>
          {/* tutorial */}
          <View>
            <Text style={styles.category}>Tutorial</Text>
            <FlatList
              data={data.Blogcartdata}
              renderItem={({item}) => (
                <Blogcart blogtext={item.blogtext} images={images.balance} />
              )}
            />
          </View>

          {/* Video */}
          <View>
            <View style={styles.flex_row}>
              <Text style={styles.category}>Video</Text>
              <TouchableOpacity onPress={() => navigation.navigate('VideoALL')}>
                <Text style={styles.seeall}>See All</Text>
              </TouchableOpacity>
            </View>
            {/* <FlatList
              data={data.Videocartdata}
              renderItem={({item}) => (
                <Videocart 
                video={{uri: item.video}}

                Videotext={item.Videotext}

                />
              )}
            /> */}
          </View>

          {/* Our Favourite Brand  */}
          <View>
            <View style={styles.flex_row}>
              <Text style={styles.category}>Our Favourite Brand </Text>
              <TouchableOpacity onPress={() => navigation.navigate('BrandALL')}>
                <Text style={styles.seeall}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={data.Brandlist}
              numColumns={2}
              renderItem={({item}) => (
                <TouchableOpacity style={{padding: width * 0.04}}>
                  <Image source={item.Brand} style={styles.brand_img} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
