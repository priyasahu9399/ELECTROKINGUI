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
import Share from 'react-native-share';
import Stars from 'react-native-stars';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import styles from './styles';
import Sliders from './../../component/slider';
import StartProgress from './../../component/star';
import {data} from '../../constants';
import {Ratingbox} from './../../component/card';
import AfterPayment from './../afterpymencart'; 
import SelectAddress from "./../selectaddress";
const {width, height} = Dimensions.get('window');

const Details = ({navigation}) => {
  const share = () => {
    const options = {
      message: 'hello user',
      url: 'http://localhost:254',
      email: 'priyasahu833242@gmail.com',
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View style={{backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={"#00063F"}  barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.main_box}>
            <View style={styles.flexrow}>
              <View style={styles.red_box}>
                <Text style={styles.redbox_text}>20% OFF</Text>
              </View>
              <TouchableOpacity onPress={share} style={styles.shareicon_box}>
                <Image source={icons.share} style={styles.icon_style} />
              </TouchableOpacity>
            </View>
            {/* sliderComponent */}
            <Sliders />

            <View style={styles.main_box}>
              <Text style={styles.slider_text1}>
                XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster
                Circuit Board
              </Text>
              <Text style={styles.slider_text2}>₹ 74.00</Text>
              <Text style={styles.slider_text3}>₹ 62.80(+18% GST extra)</Text>
            </View>
          </View>

          <View style={styles.text_box}>
            <Text style={styles.heading}>Description</Text>
            <Text style={styles.content}>
              This CN6009 XL6009 DC – DC Step-up converter module is a
              non-isolated step-up (boost) voltage converter featuring
              adjustable output voltage and high efficiency. Its operation is
              not affected by sunlight or black material like Sharp rangefinders
              are (although acoustically soft materials like cloth can be
              difficult to detect).
            </Text>

            <Text style={styles.heading}>Feature</Text>
            <Text style={styles.content}>
              1. Measures the distance within a wide range of 2cm to 400cm
            </Text>
            <Text style={styles.content}>2. Stable performance</Text>
            <Text style={styles.content}>3. Accurate distance measurement</Text>
            <Text style={styles.content}>4. High-density</Text>
            <Text style={styles.content}>5. Small blind distance</Text>

            <Text style={styles.heading}>Specification</Text>
            <View style={styles.Specification_box}>
              <Text
                style={[
                  styles.Specificationcontent,
                  styles.Specificationheading,
                ]}>
                Model
              </Text>
              <Text
                style={[
                  styles.Specificationcontent,
                  styles.Specificationheading,
                ]}>
                HC-SR04
              </Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>
                Operating Voltage (VDC)
              </Text>
              <Text style={styles.Specificationcontent}>5</Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>
                Average Current Consumption (mA)
              </Text>
              <Text style={styles.Specificationcontent}>2</Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>Frequency(Hz) </Text>
              <Text style={styles.Specificationcontent}>40000</Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>Sensing Angle </Text>
              <Text style={styles.Specificationcontent}>15Â°</Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>
                Max. Sensing Distance (cm) 450 Weight (gm)
              </Text>
              <Text style={styles.Specificationcontent}>9</Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>
                Sensor Cover Dia. (mm)
              </Text>
              <Text style={styles.Specificationcontent}>16</Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>
                PCB Size ( L x W ) mm
              </Text>
              <Text style={styles.Specificationcontent}>45 x 20</Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>Shipment Weight </Text>
              <Text style={styles.Specificationcontent}>0.014 kg </Text>
            </View>
            <View style={styles.Specification_box}>
              <Text style={styles.Specificationcontent}>
                Shipment Dimensions
              </Text>
              <Text style={styles.Specificationcontent}>5 × 4 × 3 cm</Text>
            </View>

            <Text style={styles.heading}>Warranty</Text>
            <Text style={[styles.heading, styles.day15warenty]}>
              15 Days Warranty
            </Text>
            <Text style={[styles.content, styles.warrenty]}>
              This item is covered with a standard warranty of 15 days from the
              time of delivery against manufacturing defects only. This warranty
              is given for the benefit of Robu customers from any kind of
              manufacturing defects. Reimbursement or replacement will be done
              against manufacturing defects.
            </Text>

            {/* rating */}

            <Text style={styles.heading}>Rating</Text>

            <View>
              <StartProgress
                progressbar={0.7}
                star={'star'}
                emptystar={'star'}
                num={68}
                fill_blank={2}
              />
              <StartProgress
                progressbar={0.6}
                star={'star'}
                emptystar={'star'}
                num={67}
                fill_blank={3}
              />
              <StartProgress
                progressbar={0.5}
                star={'star'}
                emptystar={'star'}
                num={50}
                fill_blank={1}
              />
              <StartProgress
                progressbar={0.8}
                star={'star'}
                emptystar={'star'}
                num={80}
                fill_blank={5}
              />
              <StartProgress
                progressbar={0.1}
                star={'star'}
                emptystar={'star'}
                num={10}
                fill_blank={4}
              />
            </View>

            <TouchableOpacity style={styles.add_review}>
              <Text style={styles.add_review_text}>Add Review</Text>
            </TouchableOpacity>

            <View>
              <FlatList
                data={data.Ratingboxdata}
                renderItem={({item}) => (
                  <Ratingbox
                    rat_text1={item.rat_text1}
                    rat_text2={item.rat_text2}
                  />
                )}
              />
            </View>

            <TouchableOpacity>
              <Text style={styles.viewall_rating}>View all ratings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.direction_row, styles.fixed_bottom_btn]}>
        <TouchableOpacity
          activeOpacity={0.6}
          // onPress={() => navigation.navigate('AfterPayment')}
          style={styles.touch_btn}>
          <Text style={styles.touch_btn_text}>Add to carts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('SelectAddress')}
          style={[styles.touch_btn, styles.touch_btn2]}>
          <Text style={styles.touch_btn_text}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
