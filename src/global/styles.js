import React from 'react';
import styled from 'styled-components/native';

export const colors = [];

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;

export const MainView = styled.SafeAreaView`
    flex: 1;
    margin-top: 0;
    background-color: #fff;
`;

export const LoginTitle = styled.Text`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
`;
export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: #F49F1C;
  padding-top: 16px;
  align-items: center;
  margin-top: 25px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
 
export const SocialLoginView = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  bottom: 110px;
  width: 80%;
  margin: auto;
`;

export const FooterView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LinkText = styled.Text`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-decoration: underline;
`;
export const OrContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const OrLine = styled.View`
  flex: 1;
  background-color: #7B7A7A;
  height: 1px;
  margin-left: 20px;
  margin-right: 20px;
  `;