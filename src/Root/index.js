import React, {useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {FONTS, COLORS, SIZES} from '../constants/theme';
import {useSelector} from 'react-redux';

import Login from './../screens/login';
import ForgetPassword from './../screens/forgetpassword';
import ResetPassword from './../screens/resetpassword';
import OTP from './../screens/otppage';
import Home from './../screens/home';
import Register from "./../screens/registers";
import BottomTab from './../navigation/BottomTabNavigator';
import DrawerPage from "./../screens/drawerscreen";

import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root =()=>{

 useEffect(() => {
        SplashScreen.hide();
    }, [])

    const [token,settoken] = useState("st");
    console.log(token);
  return (
    <>
    { token == null ?
    <Stack.Navigator>
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

      {/* <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} /> */}
      {/* <Stack.Screen
        name="SorryInterupt"
        component={SorryInterupt}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
    :
     <Drawer.Navigator
        drawerContent={props => <DrawerPage {...props} />}
        initialRouteName="Home"
        >
     
     <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      
      </Drawer.Navigator> 
    }
      </>
  );
};

export default Root;
