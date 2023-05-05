import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, FlatList, ScrollView, Pressable } from 'react-native';
import { MainHomeView, Header, HomeLogo, LocationView, SearchView } from '../src/global/styles';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { filterData } from '../src/global/Data';
import Swiper from 'react-native-swiper';

const HomeScreen = () => {
 
  const [indexCheck, setIndexCheck] = useState("0");

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
      <ScrollView>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <Swiper
            height={150}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            showsPagination={true}
            autoplay={true}
            autoplayTimeout={2}
            activeDotColor='#F49F1C'
          >
            <View style={styles.slide1}>
              <Image 
                source={require('../assets/images/slider-1.png')}
                
              />
            </View>
            <View style={styles.slide2}>
              <Image 
                source={require('../assets/images/slider-1.png')}
                
              />
            </View>
            <View style={styles.slide3}>
              <Image 
                source={require('../assets/images/slider-1.png')}
                
              />
            </View>
          </Swiper>
        </View>
        <View style={{marginLeft: 22, marginTop: 10}}>
          <Text style={{fontWeight: 600, fontSize: 18}}>All Categories</Text>
        </View>
        <View style={{marginTop: 15}}>
          <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData= {indexCheck}
            renderItem={({item, index}) => (
              <TouchableOpacity 
                onPress={() => {setIndexCheck(index.id)}}
              >
                <View style={styles.smallCard}>
                  <Image 
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.image}
                  />
                </View>
                <View>
                  <Text style={styles.smallCardText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', marginLeft: 22, marginTop: 35, alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 600, fontSize: 18}}>Set Menu</Text>
            <TouchableOpacity 
              style={{alignItems: 'center', justifyContent: 'center', marginRight: 22}}>
                <Text style={{color: '#F49F1C', fontSize: 14, textAlign: 'center'}}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </MainHomeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  smallCard: {
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    marginHorizontal: 10,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});