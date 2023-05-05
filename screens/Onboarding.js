import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import slides from '../component/slides';
import AppIntroSlider from "react-native-app-intro-slider";


const OnBoardingScreen = ({navigation}) => {
    const [showHomePage, setShowHomePage] = useState(true);
    const buttonLabel = (label) => {
        return(
          <View style={{
            padding: 12
          }}>
            <Text style={{
              color: '#221E1E',
              fontWeight: '600',
              fontSize: 30,
            }}>
              {label}
            </Text>
          </View>
        )
      }

  return (
    <View style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }}>
        <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,
            }}>
              <Image
                source={item.image}
                style={{
                  width: 200,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: '#221E1E',
                fontSize: 24,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: '#221E1E'
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: '#722620',
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          navigation.navigate('Login');
        }}
      />

    </View>
  );
};

export default OnBoardingScreen
