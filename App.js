import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import OtpVerify from './screens/OtpVerify';
import OnboardingScreen from './screens/Onboarding';
import ProductScreen from './screens/ProductScreen';
import PersonalInfo from './screens/PersonalInfo';
import AllowNotify from './screens/AllowNotify';
import AllowLocation from './screens/AllowLocation';

const Stack = createNativeStackNavigator();

export default function App() {
  
  StatusBar.setBarStyle('dark-content', true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="OtpVerify" component={OtpVerify} />
        <Stack.Screen options={{ headerShown: false }} name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen options={{ headerShown: false }} name="AllowLocation" component={AllowLocation} />
        <Stack.Screen options={{ headerShown: false }} name="AllowNotify" component={AllowNotify} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

