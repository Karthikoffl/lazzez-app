import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator(); 

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="ProductScreen" component={ProductScreen} />
        <Stack.Screen options={{ headerShown: false }} name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default AppNavigator