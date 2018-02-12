import React, { Component } from 'react';
import {
AppRegistry,	
StyleSheet,
 Image,
 View,
 Text,
 FlatList,
Dimensions,
TouchableOpacity,
RefreshControl} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import api from '../components/api';
import Main from './Main';
import Members from './Members';
import Albums from './Albums';
import ViewAlbum from './ViewAlbum';


const Tabs = TabNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'About Firm Faith Music',
    },
  },
  Members: {
    screen: Members,
    navigationOptions: {
      headerTitle: 'Group Members',
    },
  },
  Albums: {
    screen: Albums,
    navigationOptions: {
      headerTitle: 'Firm Faith Albums',
    },
  },
});


export default Tabs;