
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';


const App = ()=> {
  return (
    <SafeAreaView >
      <Title title={"Let's explore"}/>
    </SafeAreaView>
  );
}


export default App;
