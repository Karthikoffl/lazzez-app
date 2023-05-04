import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MainView, LoginTitle, LoginButton, ButtonText, SocialLoginView, LinkText, FooterView, OrLine, OrContainer } from '../src/global/styles';
import { TextInput } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const Login = () => {
  return (
    <MainView>
      <ImageBackground source={require('../assets/images/bg.png')} style={{height:Dimensions.get('window').height / 2.5}}></ImageBackground>
      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
            <LoginTitle>Enter Your Mobile Number To Get OTP</LoginTitle>
            <TextInput left={<TextInput.Affix text="+91"/>} style={{marginTop: 20}} keyboardType='numeric' mode='outlined' activeOutlineColor='#F49F1C' placeholder='10 Digit Mobile Number' label='Mobile Number'/>
            <LoginButton  
              onPress={() => {}}
            >
              <ButtonText>Get OTP</ButtonText>
            </LoginButton>
        </View>
        <OrContainer>
          <OrLine />
            <Text style={{fontSize: 18, textAlign: 'center' }}>Or</Text>
          <OrLine />
        </OrContainer>
      </View>
      <SocialLoginView>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="envelope" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image  source={require('../assets/images/gmail.png')} />
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/images/fb.png')} />
        </TouchableOpacity>  
      </SocialLoginView>
      <FooterView>
        <Text style={{ textAlign: 'center', justifyContent: 'center' }}>By Clicking, I Accept The  
          <TouchableOpacity><LinkText> Terms Of Service</LinkText>
          </TouchableOpacity>  And 
          <TouchableOpacity><LinkText>Privacy Policy</LinkText></TouchableOpacity>
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
        bottom: 50,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    }
});