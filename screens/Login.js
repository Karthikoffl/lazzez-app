import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Dimensions, 
  TouchableOpacity, 
  Image,
  Linking
} from 'react-native';
import React, { useContext, useState } from 'react';
import { 
  MainView, 
  LoginTitle, 
  LoginButton, 
  ButtonText, 
  SocialLoginView, 
  LinkText, 
  FooterView, 
  OrLine, 
  OrContainer 
} from '../src/global/styles';
import { TextInput } from 'react-native-paper';
import { AuthenticationContext } from '../authentication/authentication.context';
import { ActivityIndicator, MD2Colors  } from "react-native-paper";
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

// async function onFacebookButtonPress() {
//   // Attempt login with permissions
//   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//   if (result.isCancelled) {
//     throw 'User cancelled the login process';
//   }

//   // Once signed in, get the users AccesToken
//   const data = await AccessToken.getCurrentAccessToken();

//   if (!data) {
//     throw 'Something went wrong obtaining access token';
//   }

//   // Create a Firebase credential with the AccessToken
//   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(facebookCredential);
// }

// async function onGoogleButtonPress() {
//   // Check if your device supports Google Play
//   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }


const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <MainView>
      <ImageBackground source={require('../assets/images/bg.png')} style={{height:Dimensions.get('window').height / 2.5}}></ImageBackground>
      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
            <LoginTitle>Login Using Email Address</LoginTitle>
            <TextInput 
                style={{marginTop: 20}} 
                keyboardType='email-address'
                mode='outlined' 
                activeOutlineColor='#F49F1C' 
                placeholder='Email Address' 
                label='Email' 
                value={email}
                onChangeText={(u) => setEmail(u)}
                autoCapitalize="none"
              />
              <TextInput 
                style={{marginTop: 20}} 
                mode='outlined' 
                activeOutlineColor='#F49F1C' 
                placeholder='Password' 
                label='Password' 
                autoCapitalize="none"
                secureTextEntry 
                onChangeText={(p) => setPassword(p)}
                value={password}
              />
              {!isLoading ? (
            <LoginButton 
              onPress={() => onLogin(email, password)}
              >
              <ButtonText>Login</ButtonText>
            </LoginButton>
              ) : (
                <ActivityIndicator animating={true} color={MD2Colors.orange500} />
              )}
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}} onPress={() => navigation.navigate('Register')}>
              <Text style={{fontWeight: 600, fontSize: 16, color: '#F49F1C'}}>Register Now</Text>
            </TouchableOpacity>
        </View>
        <OrContainer>
          <OrLine />
            <Text style={{fontSize: 18, textAlign: 'center' }}>Or</Text>
          <OrLine />
        </OrContainer>
      </View>
      <SocialLoginView>
        {/* <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="envelope" size={24} color="gray" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
          <Image  source={require('../assets/images/gmail.png')} />
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
          <Image source={require('../assets/images/fb.png')} />
        </TouchableOpacity>  
      </SocialLoginView>
      <FooterView>
        <Text style={{ textAlign: 'center', justifyContent: 'center' }}>By Clicking, I Accept The  
          <TouchableOpacity  onPress={() => Linking.openURL('#')}><LinkText> Terms Of Service</LinkText>
          </TouchableOpacity>  And 
          <TouchableOpacity onPress={() => Linking.openURL('#')}><LinkText>Privacy Policy</LinkText></TouchableOpacity>
        </Text>
      </FooterView>
    </MainView>
  );
};

export default Login;

const styles = StyleSheet.create({
    bottomView: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 100,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    }
});