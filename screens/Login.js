import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import React from 'react';
import { MainScroll, LoginTitle } from '../src/global/styles';
import { TextInput } from 'react-native-paper';

const Login = () => {
  return (
    <MainScroll showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('../assets/images/bg.png')} style={{height:Dimensions.get('window').height / 2.5}}></ImageBackground>
      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
            <LoginTitle>Enter Your Mobile Number To Get OTP</LoginTitle>
            <TextInput style={{marginTop: 20}} mode='outlined' activeOutlineColor='#F49F1C' placeholder='10 Digit Mobile Number' label='Mobile Number'/>
        </View>
      </View>
    </MainScroll>
  )
}

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