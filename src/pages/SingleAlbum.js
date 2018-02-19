import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class SingleAlbum extends React.Component {
	constructor(){
        super();
        this.state={
        }
      }

	static navigationOptions = {
    title: 'Single Album',
  };
  

	
  render() {
    const {params} = this.props.navigation.state;
	  
    return (
	<View>
	<Text>{params.name}</Text>
	  </View>
    );
  }
}

