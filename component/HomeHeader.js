import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  TextInput, 
} from 'react-native';
import React from 'react';
import { 
  Feather, 
  AntDesign, 
  FontAwesome 
} from '@expo/vector-icons';
import { 
  Header, 
  HomeLogo, 
  LocationView, 
  SearchView 
} from '../src/global/styles';


const HomeHeader = () => {
  return (
    <View>
      <Header>
        <HomeLogo>
          <Image source={require('../assets/splash.png')} style={{width: 65, height: 60}} />
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
          <AntDesign name="search1" size={24} color="#F49F1C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="microphone" size={24} color="#F49F1C" />
        </TouchableOpacity>  
      </SearchView>
      </View>
  );
};

export default HomeHeader