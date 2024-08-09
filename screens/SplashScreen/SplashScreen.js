import React, { useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Routes } from '../../navigations/Routes';

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate(Routes.Community)
        },2000)
    })
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/splash.jpg')}
        style={styles.image}
        resizeMode="contain" 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
