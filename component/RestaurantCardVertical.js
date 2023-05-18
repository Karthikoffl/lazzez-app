import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import Currency from 'react-currency-formatter';
import "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const RestaurantCardVertical = ({
    id,
    image,
    title,
    rating,
    delivery,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();
  const bottomSheetModelRef = useRef(null);

  const snapPoints = ['48%'];

  function handlePresentModal() {
    bottomSheetModelRef.current?.present();
  }

  return (
    <Pressable 
        style={{height: 110, width: '100%', backgroundColor: '#fff', borderRadius: 10, shadowColor: '#171717', shadowOpacity: 0.2}}
        onPress={() => {
          navigation.navigate('ProductScreen', {
            id,
            image,
            title,
            rating,
            delivery,
          }),
          handlePresentModal;
        }}
    >
      <View style={{flexDirection: 'row', width: 150}}>
      <Image 
            source={image}
            style={{height: 90, width: 130, borderRadius: 5, marginVertical: 9, marginHorizontal: 10}}
        />
      </View>
      <View style={{position: 'absolute', flexDirection: 'column', left: 155, top: 5}}>
      <TouchableOpacity 
        style={{position: 'absolute', left: 166, top: 2, zIndex: -1}} 
        onPress={() => setIsPressed((isPressed) => !isPressed)}
      >
          <MaterialIcons name={!isPressed ? "favorite-border" : "favorite"} size={30} color="#F49F1C" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={{position: 'absolute', left: 166, top: 70, zIndex: -1}} 
        onPress={() => navigation.navigate('ProductScreen', {
          id,
          image,
          title,
          rating,
          delivery,
        })}
      >
          <Ionicons name="add-outline" size={30} color="#7B7A7A" />
      </TouchableOpacity>
      <View>
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
        <View style={{paddingVertical: 10}}>
            {/* <Currency quantity={price} currency="INR" /> */}
            <Text style={{fontSize: 16, fontWeight: 600, color: '#4B4B4B'}}>₹350</Text>
        </View>
      </View>
      </View>
      
    </Pressable>
  )
}

export default RestaurantCardVertical