import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileNavigator from './ProfileNavigator';
import CheckoutNavigation from './CheckoutNavigation';
import OrderNavigator from './OrderNavigator';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#F49F1C', tabBarInactiveTintColor: '#7B7A7A' }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={size} color={color} />
  )}}/>
        <Tab.Screen name="Cart" component={CheckoutNavigation} options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <Ionicons name="cart" size={size} color={color} />
  )}} />
        <Tab.Screen name="Order" component={OrderNavigator} options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
  )}} />
        <Tab.Screen name="Profile" component={ProfileNavigator} options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
  )}} />
  </Tab.Navigator>
  );
};

export default BottomNav