import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CheckoutNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
        <Stack.Screen options={{ headerShown: false }} name="OrderConfirm" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};

export default CheckoutNavigation;