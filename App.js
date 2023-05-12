import { StatusBar } from 'react-native'
// import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Navigation from './navigation';

export default function App() {
  
  StatusBar.setBarStyle('dark-content', true);

  return (
    <>
      <Navigation />
      <ExpoStatusBar style="auto" />  
    </>
  );
};

