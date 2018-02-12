import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View, StatusBar } from 'react-native';
import Routes from './src/Routes';
import Main from './src/pages/Main';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import MainTabs from './src/pages/MainTabs';
import Albums from './src/pages/Albums';
	

const firmfaith = StackNavigator({
  Home: { screen: Login },
  Signup: { screen: Signup },
  Main: { screen: MainTabs },
});

export default firmfaith;


