import React from 'react';
import { ScrollView } from 'react-native';
import { MainHomeView } from '../src/global/styles';
import Categories from '../component/Categories';
import MainCarousel from '../component/MainCarousel';
import HomeHeader from '../component/HomeHeader';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
 
  return (
    <MainHomeView>
      <HomeHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainCarousel />
          <Categories />
        </ScrollView>
    </MainHomeView>
  );
};

export default HomeScreen

