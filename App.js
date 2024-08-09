
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigations/MainNavigation';

const App = ()=> {
  
  return (
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
  );
}


export default App;
