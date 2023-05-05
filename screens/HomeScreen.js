import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { MainHomeView, Header, HomeLogo, LocationView, SearchView } from '../src/global/styles';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <MainHomeView>
      <Header>
        <HomeLogo>
          <Image source={require('../assets/splash.png')} style={{width: 60, height: 60}} />
        </HomeLogo>
        <LocationView>
          <Text style={{padding: 5}}>Chennai, Tamilnadu</Text>
          <Feather name="map-pin" size={24} color="#F49F1C" />
        </LocationView>
      </Header>
      <SearchView>
        <TextInput 
          placeholderTextColor={'#F49F1C'}
          placeholder='Type Something And Hit Enter...' 
        />
        <TouchableOpacity>
          <AntDesign name="search1" size={26} color="#F49F1C" />
        </TouchableOpacity>  
        <TouchableOpacity>
          <FontAwesome name="microphone" size={24} color="#F49F1C" />
        </TouchableOpacity>  
      </SearchView>
    </MainHomeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({});