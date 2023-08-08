import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {data} from '../../constants';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const Search = () => {
  const [input, setinput] = useState('');

  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
    <StatusBar backgroundColor={"#00063F"} barStyle='light-content' />

      <View style={styles.search_container}>
        <View style={[styles.search_input, styles.row_input]}>
          <Image source={icons.search} style={styles.search_icon} />
          <TextInput
            placeholder="Search here"
            value={input}
            onChangeText={text => setinput(text)}
            style={styles.search_text}
          />
        </View>
        <Text style={styles.recent_search}>Recent Searches</Text>

        <View   style={styles.row_input_flexwrap}>
          {
            data.Recentsearchdata.map((item, index) => {
            if (input === '')
             {
                return (
                  <TouchableOpacity style={styles.recent_search_box}>
                    <Text style={styles.recent_search_text}>{item.value}</Text>
                  </TouchableOpacity>
                );
              }

              if (item.value.toLowerCase().includes(input.toLowerCase())) {
                return (
                  <TouchableOpacity style={styles.recent_search_box}>
                    <Text style={styles.recent_search_text}>{item.value}</Text>
                  </TouchableOpacity>
                );
              }
          })}

    
        </View>
      </View>
    </View>
  );
};

export default Search;
