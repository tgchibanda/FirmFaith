import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image,
    AsyncStorage,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

export default class HomeBase extends Component {
	constructor(props){
		super(props);
		this.state={
			contact:'',
            password:'',
            name:'',
            id:'',
            city: '',
            country:'',
            image: '',
            email: ''
		}
    }
    
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

  moveOut(){
    AsyncStorage.setItem('isLoggedIn', 'false');
    AsyncStorage.setItem('user', '');
    this.props.navigation.navigate('Signup');
  }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{paddingTop: 20}}>
                   
                    <View style={styles.bio}>
                    <View style={{marginLeft: 150,marginBottom: 10,}}>
                    <Text 
                    style={{fontSize: 27, color:'#15514f',}}>
                         Your Profile.
                    </Text>
                    </View>
                    <View style={styles.row}>
                    <View style={styles.profilePictureContainer}>
                    <Image
                        source={{uri: 'http://www.cpstechnologies.co.za/Tests/data/img/'+this.state.image}}
                        //source={{uri: 'http://10.1.2.169/takunda/android/firmfaith/src/data/img/'+rowData.imageUrl}}
					style={{width:200, height:200, margin: 5,borderRadius:10}}></Image>
                    </View>


               
               
                    <View style={styles.col}>
                    <Text style={styles.headings}>{this.state.name}</Text>
                    
                    <Text>Contact</Text>
                    <Text>{this.state.contact}</Text>
                    <Text>Email</Text>
                    <Text>{this.state.email}</Text>
                    <Text>Country</Text>
                    <Text>{this.state.country}</Text>
                    <Text>City</Text>
                    <Text>{this.state.city}</Text>
                    </View>
                    </View>
                    </View>
                <TouchableOpacity style={styles.btn} onPress={() =>this.moveOut()}><Text style={styles.btnText}>Logout</Text></TouchableOpacity >
                
                </View>
                )
    }

    displayData= async () => {
        try{
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            this.setState({contact: parsed.contact});
            this.setState({password: parsed.password});
            this.setState({name: parsed.name});
            this.setState({id: parsed.id});
            this.setState({city: parsed.city});
            this.setState({email: parsed.email});
            this.setState({country: parsed.country});
            this.setState({image: parsed.image});
            
        }
        catch(error){
            alert(error);
        }
    }
}
const styles = StyleSheet.create({
    profilePictureContainer:{

    },headings: {
        fontSize:20,
      },
      row: {
        flexDirection:'row',
      },col: {
        flexDirection:'column',
        padding: 2,
        marginLeft:2,
      },bio: {
        backgroundColor: '#ffffff',
        alignItems:'flex-start',
        padding:10,
        marginRight:5,
        width:Dimensions.get('window').width,
      },btn: {
        borderRadius: 25,
        backgroundColor:'#15514f',
        marginVertical: 10,
        paddingVertical: 12,
        alignItems:'center',
        justifyContent: 'center'
    },
});