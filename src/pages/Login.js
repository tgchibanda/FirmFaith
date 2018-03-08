import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, Image, ScrollView, Keyboard } from 'react-native';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state={
			contact:'',
			userPassword:''
		}
	}
	
	static navigationOptions = {
    title: 'Login',
  };
  

	
	LoginNow(){
        var data = {
            "contact": this.state.contact,
            "password": this.state.userPassword,
     }

			return fetch('http://www.cpstechnologies.co.za/Tests/slim/api/user/'+this.state.contact+'/'+this.state.userPassword ,{

			method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
			
			
		})
		.then((response) => response.json())
			.then((responseData, err) => {
				//alert(
				//	responseData,
				//	"Response Body -> " + JSON.stringify(responseData.body)
				//);
				if(responseData=="Login Ok"){
					this.props.navigation.navigate('Main');
				}
				else{
					//this.props.navigation.navigate('Home');
				}
			})
			.done();
	}

	
  render() {
		const { navigate } = this.props.navigation;
		
		
	  
    return (
	<View style={styles.container}>
	<ScrollView style={styles.scrollview}>
      
	  
		<View style={styles.logo}>
        <Image source={require('../images/logo.png')}
			style={{width: 65, height: 90}} />
			
		<Text style={styles.LogoText}>Firm Faith Music</Text>
		</View>
		
		
		<View style={styles.loginForm}>
					<TextInput style={styles.inputBox} 
					underlineColorIos='#fff' 
					placeholder='Contact'
					selectionColor="#fff"
					keyboardType="numeric"
					placeholderTextColor="#ffffff"
					onChangeText={contact=> this.setState({contact})}
					onSubmitEditing={()=> this.password.focus()}
					/>
					
					<TextInput style={styles.inputBox} 
					underlineColorIos='#fff' 
					placeholder='Password'
					secureTextEntry={true}
					placeholderTextColor="#ffffff"
					selectionColor="#fff"
					onChangeText={userPassword=> this.setState({userPassword})}
					ref={(input)=> this.password= input}
					/>
					
					<TouchableOpacity style={styles.btn} onPress={Keyboard.dismiss} onPress={() => this.LoginNow()}><Text style={styles.btnText}>Login</Text></TouchableOpacity >				  
		</View>
		<View style={styles.signupTextCont}>
						<Text style={styles.signupText}>Don't have an account yet?</Text>
						<TouchableOpacity style={styles.signupLink} onPress={() => navigate('Signup')}><Text style={styles.signupBtn}>Signup</Text></TouchableOpacity>
					</View>
      
	  </ScrollView>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
	backgroundColor: '#455a64',
  },
  container: {
	flex:1,
    backgroundColor: '#455a64',
	paddingTop: 15,
	justifyContent: 'center',
	alignItems: 'center',
  },
  signupTextCont: {
	flexDirection:'row',
	justifyContent: 'center',
  },
  signupText: {
	color:'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupBtn: {
	color:'#ffffff',
    fontSize: 16,
	fontWeight: '500',
	marginLeft:5,
  },
  signupLink: {
	  height:20
  },
  inputBox: {
	  width:300,
	  height:30,
	  backgroundColor:'rgba(255,255,255,0.2)',
	  borderRadius: 25,
	  paddingHorizontal: 16,
	  fontSize:16,
	  color:'#ffffff',
	  marginVertical:10,
  },
  btnText: {
	  fontSize:16,
	  color:'#ffffff',
	  fontWeight: '500',
  },
   btn: {
	  width:300,
	  borderRadius: 25,
	  backgroundColor:'rgba(255,255,255,0.3)',
	  marginVertical: 10,
	  paddingVertical: 12,
	  backgroundColor: "#1c313a",
	  alignItems:'center',
	  justifyContent: 'center'
  },
  loginForm: {
	flex: 50,
  },
  logo: {
	marginBottom: 30,
	marginTop: 30,
	alignItems:'center',
	justifyContent:'center',
  },
  LogoText: {
	fontSize:18,
	color:'#fff',
	marginTop: 15,
  },
});
