import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Stars from 'react-native-stars';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import styles from './styles';
const {width, height} = Dimensions.get('window');


const StartProgress = ({progressbar,fill_blank, num,emptystar, star}) => {
  return (
    <View style={styles.flexrow}>
      <Stars
        default={fill_blank}
        count={5}
        fullStar={<Icon name={star} size={14} style={[styles.myStarStyle]} />}
        emptyStar={
          <Icon
            name={emptystar}
            size={14}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
      />
      <View>
        <ProgressBar
          //  progress={0.7}
          progress={progressbar}
          width={140}
          height={8}
          animated={true}
          //   progress
          color="#8D8D8D"
          unfilledColor="#D9D9D9"
          borderColor="white"
          style={styles.progress}
        />
      </View>
      <Text style={styles.numtext}>{num}</Text>
    </View>
  );
};


export default StartProgress;