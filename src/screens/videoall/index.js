import React, {useEffect, useState} from 'react';
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
  // Trendingvideocart,
} from './../../component/card';

import styles from './styles';

const {width, height} = Dimensions.get('window');

const VideoALL = () => {
  const [pauseid, setpauseid] = useState();
  const [play, setplay] = useState(true);

  console.log(pauseid);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={'#00063F'} barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Image source={images.homemain} style={styles.main_img} />
        </TouchableOpacity>
        {/* <View style={styles.padding}>
          <View>
            <Text style={styles.category}>Trending Video</Text>
            <FlatList
              data={data.Trendingvideocartdata}
              renderItem={({item}) => (
                <Trendingvideocart
                  onPress={() => setpauseid(item.id)}
                  Trendingvideo={{uri: item.Trendingvideo}}
                  videocarttext={item.videocarttext}
                  // active={ item.id == pauseid ==  ? play : null}
                />
              )}
            />
          </View>
          <View>
            <Text style={styles.category}>Different modules video</Text>
            <FlatList
              data={data.Trendingvideocartdata}
              renderItem={({item}) => (
                <Trendingvideocart
                  videocarttext={item.videocarttext}
                  Trendingvideo={{uri: item.Trendingvideo}}
                />
              )}
            />
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default VideoALL;
