import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View, StatusBar } from 'react-native';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum';
	

const albums = StackNavigator({
  AlbumsHome: { screen: Albums, navigationOptions: {
    headerTitle: 'Firm Faith Albums',
           }, 
        },
  SingleAlbum: { screen: SingleAlbum },

});

export default albums;


