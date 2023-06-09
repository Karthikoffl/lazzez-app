import React, {
  useState, 
  useEffect
} from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { MainHomeView } from '../src/global/styles';
import Categories from '../component/Categories';
import MainCarousel from '../component/MainCarousel';
import HomeHeader from '../component/HomeHeader';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
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
    <MainHomeView>
      <HomeHeader />
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
          <MainCarousel />
          <Categories />
        </ScrollView>
    </MainHomeView>
  );
};

export default HomeScreen

