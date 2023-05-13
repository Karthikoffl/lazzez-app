import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import CameraScreen from '../screens/CameraScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{gestureEnabled: false, headerShown: false }} name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen options={{gestureEnabled: false, headerShown: false }} name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;