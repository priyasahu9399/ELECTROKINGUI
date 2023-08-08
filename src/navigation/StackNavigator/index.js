import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';

import {useSelector} from 'react-redux';
import SorryInterupt from '../../screens/sorryintrup';
import styles from './styles';
import Register from './../../screens/registers';
import Login from './../../screens/login';
import ForgetPassword from './../../screens/forgetpassword';
import ResetPassword from './../../screens/resetpassword';
import OTP from './../../screens/otppage';
import Home from './../../screens/home';
import Search from './../../screens/search';
import Cart from './../../screens/cartscreen';
import Profile from './../../screens/profile';
import CategoriesAll from './../../screens/categorieall';
import RecommendedAll from './../../screens/recommendedall';
import BlogALL from './../../screens/blogsall';
import VideoALL from './../../screens/videoall';
import BrandALL from './../../screens/brand';
import SelectAddress from './../../screens/selectaddress';
import Details from './../../screens/details';
// import Search from "./../../screens/search/index";
import OrderSummary from './../../screens/ordersummery';
import Payment from './../../screens/payment';
import AfterPayment from './../../screens/afterpymencart';
import OneCarts from './../../screens/CARTS';
import Brand2 from './../../screens/brand2';
import Categories2 from './../../screens/categories2';
import DeliveryAddress from './../../screens/profiledeliveryaddress';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const bottomBarCondition = (navigation, route, routeName) => {
  if (
    getFocusedRouteNameFromRoute(route) === routeName ||
    getFocusedRouteNameFromRoute(route) === undefined
  ) {
    navigation.setOptions({
    tabBarStyle: {
    height: height * 0.08
    }
  })
  } else {
    navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
  }
};

const Toggle = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={icons.toggledra}
        style={{
          width: width * 0.06,
          height: height * 0.023,
          marginHorizontal: width * 0.04,
        }}
      />
    </TouchableOpacity>
  );
};

const HomeStackScreen = ({navigation, route}) => {
  bottomBarCondition(navigation, route, "Electroking")
  return (
    <Stack.Navigator
      initialRouteName="Electroking"
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerShadowVisible: false,
      })}>
      <Stack.Screen
        name="Electroking"
        component={Home}
        options={{
          title: (
            <View>
              <Image
                source={images.homeimage}
                style={{width: width * 0.4, height: height * 0.038}}
              />
            </View>
          ),

          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="CategoriesAll"
        component={CategoriesAll}
        options={{
          title: '',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="Categories2"
        component={Categories2}
        options={{
          title: 'Categories',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
            <Stack.Screen
        name="SelectAddress"
        component={SelectAddress}
        options={{
          title: 'Select Address',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{
          title: 'Order summery',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="AfterPayment"
        component={AfterPayment}
        options={{
          title: 'Carts',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="RecommendedAll"
        component={RecommendedAll}
        options={{
          title: 'Categories',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="BlogALL"
        component={BlogALL}
        options={{
          title: 'Blog',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="VideoALL"
        component={VideoALL}
        options={{
          title: 'Video',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen
        name="BrandALL"
        component={BrandALL}
        options={{
          title: 'Brand',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="Brand2"
        component={Brand2}
        options={{
          title: 'Brand',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
    </Stack.Navigator>
  );
};

const SearchStackScreen = ({navigation, route}) => {
  bottomBarCondition(navigation, route, "Search")

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerShadowVisible: false,
      })}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
    </Stack.Navigator>
  );
};

const CartStackScreen = ({navigation, route}) => {
  bottomBarCondition(navigation, route, "Carts")

  return (
    <Stack.Navigator
      initialRouteName="AfterPayment"
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerShadowVisible: false,
      })}>
       <Stack.Screen
        name="AfterPayment"
        component={AfterPayment}
        options={{
          title: 'Carts',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="SelectAddress"
        component={SelectAddress}
        options={{
          title: 'Select Address',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
     
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{
          title: 'Order summery',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = ({navigation, route}) => {
  bottomBarCondition(navigation, route, "Profile")

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerShadowVisible: false,
      })}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectAddress"
        component={SelectAddress}
        options={{
          title: 'Select  Address',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{
          title: 'Order summery',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="AfterPayment"
        component={AfterPayment}
        options={{
          title: 'Carts',

          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="OneCarts"
        component={OneCarts}
        options={{
          title: 'Carts',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="DeliveryAddress"
        component={DeliveryAddress}
        options={{
          title: 'Address',
          headerTitleStyle: {
            ...FONTS.fiveHundred,
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: COLORS.darkblue,
          },
          headerTintColor: 'white',
          headerLeft: () => <Toggle onPress={() => navigation.openDrawer()} />,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStackScreen,
  SearchStackScreen,
  CartStackScreen,
  ProfileStackScreen,
};
