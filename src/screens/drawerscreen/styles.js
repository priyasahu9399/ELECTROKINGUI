import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
profile_box:{
backgroundColor:"#00063F",
padding:width*0.08,
paddingVertical:height*0.06,
flexDirection:"row",
alignItems: "center",
},
profile_img_box:{
   width:width*0.18,
height:height*0.09,
backgroundColor:"#C6C6C6",
alignItems:"center",
justifyContent:"center",
borderRadius:50,

},
profile_img:{
 width:width*0.11,
height:height*0.06,
},
profile_text:{
   width:width*0.4,
   marginLeft:width*0.05,
   color:COLORS.white,
   fontSize:12,
   ...FONTS.sixHundred,
},
draw_list:{
   backgroundColor:COLORS.white,
   height:height,
   padding:width*0.07,
},
draw_list_text:{
   fontSize:12,
   ...FONTS.fourHundred,
   color:"#717171",
   width:width*0.6,
   padding:height*0.01,
},
flexDirection:{
   flexDirection: 'row',
   alignItems: 'center',
},
col_arrow:{
   width:width*0.035,
   height:height*0.01,
   marginLeft:width*0.00,
}

})