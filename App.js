import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View, StatusBar } from 'react-native';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import MainTabs from './src/pages/MainTabs';
import Members from './src/pages/Members';
import AlbumBase from './src/pages/AlbumBase';
import ViewAlbum from './src/pages/ViewAlbum';
import Notices from './src/pages/Notices';
import Main from './src/pages/Main';
import NoticesHome from './src/pages/NoticesHome';


const firmfaith = StackNavigator({
  Home: { screen: Login },
  Signup: { screen: Signup },
  Main: { screen: MainTabs },
});

export default firmfaith;


