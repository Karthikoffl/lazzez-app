import { View, Text, Image, ScrollView, TouchableOpacity, Pressable, TextInput } from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const {
    params: {
      id,
      title,
      image,
      delivery,
      rating,
  },
} = useRoute();

  let [count, setCount] = useState(0);
  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

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
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingTop: 30}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
          <TouchableOpacity 
            style={{paddingLeft: 118}} 
            onPress={() => setIsPressed((isPressed) => !isPressed)}
          >
            <MaterialIcons name={!isPressed ? "favorite-border" : "favorite"} size={30} color="#F49F1C" />
          </TouchableOpacity>         
        </View>
        <View style={{paddingLeft: 15, paddingBottom: 5, flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />
            <FontAwesome style={{padding: 1.5}} name="star" size={15} color="#F49F1C" />

            <Text style={{paddingLeft: 10}}>{rating} Rating</Text> 
        </View>
        <View style={{padding: 20, paddingTop: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc eleifend metus pulvinar mattis.Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
        </View>
        <View style={{paddingLeft: 20, paddingBottom: 40, flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="delivery-dining" size={20} color="black" />
            <Text style={{paddingHorizontal: 5, fontSize: 14}}>{delivery}</Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontWeight: '600', fontSize: 24}}>Extra</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
          <View>
            <Text style={{fontSize: 18}}>Rice</Text>
          </View>
          <View style={{borderWidth: 1, borderRadius: 50}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              color='#F49F1C'
              onPress={() => {
              setChecked(!checked);
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
          <View>
            <Text style={{fontSize: 18}}>Water Bottle</Text>
          </View>
          <View style={{borderWidth: 1, borderRadius: 50}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              color='#F49F1C'
              onPress={() => {
              setChecked(!checked);
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
          <View>
            <Text style={{fontSize: 18}}>Extra Eggs</Text>
          </View>
          <View style={{borderWidth: 1, borderRadius: 50}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              color='#F49F1C'
              onPress={() => {
              setChecked(!checked);
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View 
            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F49F1C', backgroundColor: '#fcddac', borderRadius: 10, marginLeft: 15, marginTop: 20, paddingHorizontal: 10, maxWidth: 100}}>
            <Pressable style={{paddingHorizontal: 6}}>
              <Text style={{padding: 5, fontSize: 20}} onPress={decrement}>-</Text>
            </Pressable>
            <Text>{count}</Text>
            <Pressable style={{paddingHorizontal: 6}}>
              <Text style={{padding: 5, fontSize: 20}} onPress={increment}>+</Text>
            </Pressable>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 12, marginTop: 20}}>
            <TouchableOpacity 
              style={{backgroundColor: '#F49F1C', paddingHorizontal: 90, paddingVertical: 20, borderRadius: 10}} 
              onPress={() => {}}
            >
              <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>

  );
};

export default ProductScreen