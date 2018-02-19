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
import AlbumBase from './AlbumBase';
import ViewAlbum from './ViewAlbum';
import NoticesHome from './NoticesHome';


const Tabs = TabNavigator({
  MainTabsHome: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'About Firm Faith Music',
      headerLeft: null,
    },
  },
  Members: {
    screen: Members,
    navigationOptions: {
      headerTitle: 'Group Members',
      headerLeft: null
    },
  },
  Albums: {
    screen: AlbumBase,
    navigationOptions: {
      headerTitle: 'Firm Faith Albums',
      header: null,
    },
  },Notices: {
    screen: NoticesHome,
    navigationOptions: {
      headerTitle: 'Notice Board',
      header: null,
    },
  },
});


export default Tabs;