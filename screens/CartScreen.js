import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Surface } from 'react-native-paper';

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
    <Surface style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{left: -110}}>
          <Ionicons name="arrow-back" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>My Cart</Text>
      </View>
    </Surface>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    height: 58,
    elevation: 4,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F49F1C',
  },
  HeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 80,
  },
}); 