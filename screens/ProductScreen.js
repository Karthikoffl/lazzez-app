import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProductScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      title,
      image,
      delivery,
      rating,
  },
} = useRoute();

  return (
    <ScrollView>
      <View style={{position: 'relative'}}>
        <Image 
          source={image}
          style={{width: '100%', height: 250, backgroundColor: '#fff'}}
        />
        <TouchableOpacity 
          style={{position: 'absolute', top: 44, left: 10, padding: 2, backgroundColor: '#fff', borderRadius: 50}} 
          onPress={navigation.goBack}
          >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductScreen