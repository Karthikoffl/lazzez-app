import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const CheckoutNavigation = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Text>My Cart</Text>
        </View>
    </SafeAreaView>
  )
}

export default CheckoutNavigation