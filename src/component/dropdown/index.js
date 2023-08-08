import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

const Categoriesdata = [{value: '1'}, {value: '2'}];

const Dropdowncategorie = () => {
  const [valuecategorie, setValuecategorie] = useState(null);

  return (
    <View>
      <Dropdown
      //   style={styles.dropdownCategories}
        containerStyle={styles.containerStyleCategories}
        placeholderStyle={styles.placeholderStyleCategories}
        iconStyle={styles.iconStyleCategories}
      //   itemTextStyle={styles.itemTextStyleCategories}
      //   selectedTextStyle={styles.selectedTextStyleCategories}
        data={Categoriesdata}
        //   showsVerticalScrollIndicator={false}
        //   maxHeight={180}
        labelField="labelCategories"
        valueField="value"
        placeholder="Categories"
        onChange={item => {
          setValuecategorie(item.value);
        }}
      />
    </View>
  );
};

export default Dropdowncategorie;

const styles = StyleSheet.create({
    placeholderStyleCategories: {
    fontSize: 12,
    ...FONTS.fourHundred,
    color: '#717171',
    paddingLeft:width*0.02,
  },
   iconStyleCategories: {
    tintColor: '#3A3A3A',
  },
  containerStyleCategories: {
    marginTop: height * -0.04,
    borderRadius: 10,
  },


//   dropdownCategories: {
//    //   height: height * 0.07,
// width:width*0.6,
   //   backgroundColor: 'white',
   //   borderRadius: 10,
   //   padding: width * 0.03,
//   },
  //   selectedTextStyleCategories: {
  // fontSize:12,
  //    ...FONTS.fourHundred,
  //    color:"#717171",
  //   },
 
  //   itemTextStyleCategories: {
  // color:"#717171",
  //     fontSize: 11,
  //    ...FONTS.fourHundred,
  //    //  margin: height * -0.01,
  //   },

 
});
