
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigations/MainNavigation';
import { CommunityProvider } from './context/CommunityContext';

const App = ()=> {
  
  return (
    <CommunityProvider>
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
      </CommunityProvider>
  );
}


export default App;
