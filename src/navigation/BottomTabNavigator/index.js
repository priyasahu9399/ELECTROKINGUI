import React from 'react';
import {Image, Dimensions, View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import {
  HomeStackScreen,
  SearchStackScreen,
  CartStackScreen,
  ProfileStackScreen,
} from '../StackNavigator';
// import default from "./../../redux/reducers/auth";
import Search from './../../screens/search';
import Cart from './../../screens/cartscreen';
import Profile from './../../screens/profile';
import styles from './styles';

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: height * 0.08},
      }}>
      <Tab.Screen
        name="HomeBottom"
        component={HomeStackScreen}
        options={{
          
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.home}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.darkblue : '#444444'},
                ]}
              />
              <Text
                style={[
                  styles.text,
                  {color: focused ? COLORS.darkblue : '#444444'},
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchBottom"
        component={SearchStackScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.search}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.darkblue : '#444444'},
                ]}
              />
              <Text
                style={[
                  styles.text,
                  {color: focused ? COLORS.darkblue : '#444444'},
                ]}>
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CartsBottom"
        component={CartStackScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.carts}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.darkblue : '#444444'},
                ]}
              />
              <Text
                style={[
                  styles.text,
                  {color: focused ? COLORS.darkblue : '#444444'},
                ]}>
                Carts
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileBottom"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.profile}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.darkblue : '#444444'},
                ]}
              />
              <Text
                style={[
                  styles.text,
                  {color: focused ? COLORS.darkblue : '#444444'},
                ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
