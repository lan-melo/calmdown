/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native';


import Logo from './src/LoginComponents/Logo';
import TitleText from './src/LoginComponents/TitleText';
import InputEmail from './src/LoginComponents/InputEmail';
import InputPassword from './src/LoginComponents/InputPassword';
//import RadioButton from './src/LoginComponents/RadioButton';
import SignInButton from './src/LoginComponents/SignInButton';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <ImageBackground style={styles.container} source={require('./assets/back.jpg')}>
        <Logo />
        <TitleText />

        <View style={styles.formLogin}>
          <InputEmail />
          <InputPassword />

          <SignInButton />
        </View>       
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99CC99',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLogin: {
    marginTop: 40,
  },
});


