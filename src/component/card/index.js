import React, {startTransition} from 'react';
import {useState, useRef} from 'react';
import Stars from 'react-native-stars';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

// import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-player';
import LinearGradient from 'react-native-linear-gradient';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  carddata,
  RecommendedCartdata,
  ServiceCartdata,
  Blogcartdata,
  Videocartdata,
  AllBlogcartdata,
  Trendingvideocartdata,
  Ratingboxdata,
  SelectAddressdata,
  CartsCARTSdata,
} from '../../constants';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const Profilecart = ({onPress, pro_icon, profile_text, style, arrow}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item_row, styles.set_row_item]}>
      <View style={styles.item_row}>
        <Image source={pro_icon} style={style} />
        <Text style={styles.pro_text}>{profile_text}</Text>
      </View>
      <Image source={arrow} style={styles.arrow} />
    </TouchableOpacity>
  );
};

const CartsComponent = ({src, text1, text2}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.categorybox_background}>
      <View>
        <Image source={src} style={styles.category_image} />
      </View>
      <Text style={styles.category_text}>{text1}</Text>
      <Text style={[styles.category_text, styles.boards]}>{text2}</Text>
    </TouchableOpacity>
  );
};

const RecommendedCart = ({
  onPress,
  source,
  icon,
  title1,
  title2,
  title3,
  title4,
  title5,
  active,
  hearticon,
}) => {
  const [wishlist, setwishlist] = useState(true);

  return (
    <View>
      <TouchableOpacity
        // active={true}
        onPress={onPress}
        activeOpacity={0.6}
        style={styles.Recommended_box_size}>
        <Text style={styles.Recommended_toptext}>{title1}</Text>
        <View>
          <TouchableOpacity onPress={() => setwishlist(!wishlist)}>
            {!wishlist ? (
              <Image source={icons.heart} style={styles.heart_icon} />
            ) : (
              <Image source={icons.blankheart} style={styles.heart_icon} />
            )}
          </TouchableOpacity>
          <Image source={source} style={styles.Recommended_image} />
        </View>
        <View>
          <Text style={styles.Recommended_bluetext}>{title2}</Text>
          <Text style={styles.Recommended_sku}>{title3}</Text>
          <View style={styles.Recommended_flexrow}>
            <Stars
              default={3.5}
              count={5}
              half={true}
              // starSize={50}
              fullStar={
                <Icon name={'star'} size={13} style={[styles.myStarStyle]} />
              }
              emptyStar={
                <Icon
                  name={'star'}
                  size={13}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon
                  name={'star-half-full'}
                  size={13}
                  style={[styles.myStarStyle]}
                />
              }
            />

            <Text style={styles.Recommended_startright}>{title4}</Text>
          </View>

          <View style={[styles.Recommended_flexrow, styles.rupeebox]}>
            <Text style={styles.Recommended_rupee}>{title5}</Text>
            <TouchableOpacity>
              <Image source={icon} style={styles.Recommended_icon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ServiceCart = ({text, src}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <LinearGradient
        colors={['#e9f0ce', 'rgba(0, 0, 0, 0.25)', 'rgba(0, 0, 0, 0.25)']}
        style={styles.linearbox}>
        <View style={styles.service_box}>
          <View>
            <Image source={src} style={styles.service_img} />
          </View>
          <Text style={styles.service_text}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Blogcart = ({images, blogtext}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.blog_box}>
      <Image source={images} style={styles.blog_img} />
      <Text style={styles.blog_text}>{blogtext}</Text>
    </TouchableOpacity>
  );
};

// const Videocart = ({video, Videotext}) => {
//   return (
//     <View>
//       <TouchableOpacity activeOpacity={0.6} style={styles.Video_box}>
//         <View>
//           <VideoPlayer
//             video={video}
//             videoWidth={width * 0.8}
//             videoHeight={height * 0.2}
//             style={styles.playvideo}
//             resizeMode="cover"
//             showDuration
//           />
//         </View>
//         <Text style={styles.blog_text}>{Videotext}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const AllBlogcart = ({Blogcartimages, Blogcarttext}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} style={styles.Blogvideocart_box}>
        <Image source={Blogcartimages} style={styles.blog_img} />
        <Text style={styles.blog_text}>{Blogcarttext}</Text>
      </TouchableOpacity>
    </View>
  );
};

// const Trendingvideocart = ({active , onPress , Trendingvideo, videocarttext}) => {
//   return (
//     <View>
//       <TouchableOpacity  active  onPress={onPress}  activeOpacity={0.6} style={styles.Blogvideocart_box}>
//         <View style={styles.playvideo_box}>
//           <VideoPlayer
//             video={Trendingvideo}
//             videoWidth={width * 0.8}
//             videoHeight={height * 0.2}
//             style={styles.playvideo}
//             resizeMode="cover"
//             showDuration
//           />
//         </View>
//         <Text style={styles.blog_text}>{videocarttext}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const Ratingbox = ({rat_text1, rat_text2}) => {
  return (
    <View>
      <View style={styles.star_set}>
        <Stars
          default={3}
          count={5}
          fullStar={
            <Icon name={'star'} size={14} style={[styles.ratingStarStyle]} />
          }
          emptyStar={
            <Icon
              name={'star'}
              size={14}
              style={[styles.ratingStarStyle, styles.EmptyratingStarStyle]}
            />
          }
        />
      </View>
      <Text style={styles.rating_text}>{rat_text1}</Text>
      <Text style={[styles.rating_text, styles.text_2]}>{rat_text2}</Text>
    </View>
  );
};

const SelectAddresscart = ({
  address_text1,
  address_text2,
  address_text3,
  address_text4,
  onPress,
  checked,
  active,
}) => {
  // const [checkedbtn,setcheckedbtn] = useState(true)

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      active
      style={styles.select_addressbox}>
      <View style={styles.row}>
        {(checked && (
          <TouchableOpacity style={styles.radio_box}>
            <View style={styles.innerradio_box}></View>
          </TouchableOpacity>
        )) || (
          <TouchableOpacity
            style={[
              styles.radio_box,
              {borderColor: 'black'},
            ]}></TouchableOpacity>
        )}

        <View style={styles.Textaddress_box}>
          <Text style={styles.address_1}>{address_text1}</Text>
          <Text style={styles.address_2}>{address_text2}</Text>
          <Text style={styles.address_2}>{address_text3}</Text>
        </View>

        {checked && (
          <TouchableOpacity style={styles.editBox}>
            <Text style={styles.edit}>{address_text4}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const CartsCARTS = ({
  src,
  carttext1,
  carttext2,
  carttext3,
  carttext4,
  carttext5,
}) => {
  const [incdecre, setincdecre] = useState(1);

  return (
    <View style={styles.pymentorder_box2}>
      <View style={styles.pymentrowflex}>
        <TouchableOpacity>
          <Image source={src} style={styles.pymentorder_img} />
        </TouchableOpacity>
        <Text style={styles.pymentorder_text1}>{carttext1}</Text>
      </View>
      <View style={[styles.pymentrowflex]}>
        <View style={styles.pymentrowflex}>
          <Text style={[styles.pymentorder_text1, styles.pymentorder_Qty]}>
            Qty :
          </Text>
          <Text
            style={[
              styles.pymentorder_text1,
              styles.pymentorder_Qty,
              styles.number1,
            ]}>
            {incdecre}
          </Text>
          <View style={styles.pymentplusminus_box}>
            <TouchableOpacity onPress={() => setincdecre(incdecre + 1)}>
              <Text style={styles.pymentorder_plusminus}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (incdecre == 1) {
                  setincdecre(1);
                } else {
                  setincdecre(incdecre - 1);
                }
              }}>
              <Text style={[styles.pymentorder_plusminus, styles.subtract]}>
                __
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.pymentrowflex, styles.pymentrupeebox]}>
          <Text style={styles.pymentorder_rupee_text1}>{carttext2}</Text>
          <Text style={styles.pymentorder_rupee_text2}>{carttext3}</Text>
          <Text style={styles.pymentorder_rupee_text3}>{carttext4}</Text>
        </View>
      </View>

      <View style={styles.border}></View>
      <View style={styles.pymentrow_between}>
        <TouchableOpacity style={styles.pymentrowflex}>
          <Image source={icons.deleteicon} style={styles.deleteicon} />
          <Text style={styles.remove_buy}>Remove</Text>
        </TouchableOpacity>
        <View style={styles.borderRight}></View>
        <TouchableOpacity>
          <Text style={styles.remove_buy}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {
  Profilecart,
  CartsComponent,
  RecommendedCart,
  ServiceCart,
  Blogcart,
  // Videocart,
  AllBlogcart,
  // Trendingvideocart,
  Ratingbox,
  SelectAddresscart,
  CartsCARTS,
};
