import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/Onboarding';
import Login from '../screens/Login';
import OtpVerify from '../screens/OtpVerify';
import PersonalInfo from '../screens/PersonalInfo';
import AllowLocation from '../screens/AllowLocation';
import AllowNotify from '../screens/AllowNotify';
import ProductScreen from '../screens/ProductScreen';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnBoardingScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="OtpVerify" component={OtpVerify} />
            <Stack.Screen options={{ headerShown: false }} name="PersonalInfo" component={PersonalInfo} />
            <Stack.Screen options={{ headerShown: false }} name="AllowLocation" component={AllowLocation} />
            <Stack.Screen options={{ headerShown: false }} name="AllowNotify" component={AllowNotify} />
            <Stack.Screen options={{ headerShown: false }} name="ProductScreen" component={ProductScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={BottomNav} />
        </Stack.Navigator>
    );
}