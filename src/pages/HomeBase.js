import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image
} from 'react-native';

export default class HomeBase extends Component {

    static navigationOptions ={
		tabBarLabel: 'Settings',
		tabBarIcon: ({tintColor}) => (
			<Image
				source={require('../images/settings.png')}
				style={{width:22, height: 22, tintColor: '#15514f'}}>
				</Image>
		)
  }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                <View style={{margin:20}} />
                
                </ScrollView>
                )
    }
}