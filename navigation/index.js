import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
// import AppNavigator from './AppNavigator';


const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigation