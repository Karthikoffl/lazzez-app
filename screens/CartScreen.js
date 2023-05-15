import { 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  RefreshControl 
} from 'react-native';
import React, {useState, useEffect}  from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Surface } from 'react-native-paper';

const CartScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  const onRefresh = () => {
    //Clear old data of the list
    setDataSource([]);
    //Call the Service to get the latest data
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    //Service to get the data from the server to render
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
    <Surface style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{left: -118}}>
          <Ionicons name="arrow-back" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>My Cart</Text>
      </View>
    </Surface>
    <ScrollView
      showsVerticalScrollIndicator={false} 
      refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            
    </ScrollView>
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
    marginRight: 45,
  },
}); 