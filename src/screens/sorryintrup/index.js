import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {images, icons} from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const SorryInterupt = () => {
  return (
    <View style={styles.sorry_box}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <Text style={styles.sorry_interruption}> Sorry for the interruption</Text>
      <Text style={styles.Loading}>Loading</Text>
      <View style={styles.loadiconset}>
        <FontAwesome name="circle-o" style={styles.loadicon} />
        <FontAwesome name="circle" style={styles.loadicon} />
      </View>
      {/* <View>
          <Image  source={images.load}  />
        </View> */}
    </View>
  );
};

export default SorryInterupt;
