import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image,
    AsyncStorage,
    TouchableOpacity
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

  componentDidMount() {
    this.displayData();
  }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <TouchableOpacity
                   onPress={this.displayData}
                   >
                   <Text 
                    style={{fontSize: 27}}>
                   Welcome
                   
                </Text>
                </TouchableOpacity> 
                <View style={{margin:20}} />
                
                </ScrollView>
                )
    }

    displayData= async () => {
        try{
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            alert(parsed.name);
        }
        catch(error){
            alert(error);
        }
    }
}