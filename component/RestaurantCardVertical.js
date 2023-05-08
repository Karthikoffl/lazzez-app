import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import React, {useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const RestaurantCardVertical = ({
    id,
    image,
    title,
    rating,
    delivery,
}) => {

  

  return (
    <Pressable 
        style={{height: 160, width: '100%', backgroundColor: '#fff', borderRadius: 10, shadowColor: '#171717', shadowOpacity: 0.2}}
    >
      <View style={{flexDirection: 'row', width: 150}}>
      <Image 
            source={image}
            style={{height: 140, width: 130, borderRadius: 5, marginVertical: 10, marginHorizontal: 10}}
        />
      </View>
      <View style={{position: 'absolute', flexDirection: 'column', left: 160, top: 20}}>
      <TouchableOpacity style={{position: 'absolute', left: 166, top: -15, zIndex: -1}}>
          <MaterialIcons name="favorite-border" size={30} color="#F49F1C" />
        </TouchableOpacity>
      <View style={{}}>
        <View style={{paddingTop: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
        </View>
        <View style={{paddingTop: 5, paddingBottom: 5, flexDirection: 'row'}}>
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            
        </View>
        <View style={{paddingTop: 5, paddingBottom: 5, flexDirection: 'row'}}>
            <MaterialIcons name="delivery-dining" size={16} color="black" />
            <Text style={{paddingHorizontal: 5, fontSize: 12}}>{delivery}</Text>
        </View>
        <View style={{paddingVertical: 5}}>
            <Text style={{fontSize: 16, fontWeight: 600, color: '#4B4B4B'}}>₹350</Text>
        </View>
      </View>
      </View>
      
    </Pressable>
  )
}

export default RestaurantCardVertical