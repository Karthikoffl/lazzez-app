import React from 'react';
import { ScrollView } from 'react-native';
import { MainHomeView } from '../src/global/styles';
import Categories from '../component/Categories';
import MainCarousel from '../component/MainCarousel';
import HomeHeader from '../component/HomeHeader';

const HomeScreen = () => {
 
  return (
    <MainHomeView>
      <HomeHeader />
      <ScrollView>
        <MainCarousel />
        <Categories />
      </ScrollView>
    </MainHomeView>
  );
};

export default HomeScreen

