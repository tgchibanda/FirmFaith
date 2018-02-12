import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} 
		underlineColorIos='#fff' 
		placeholder='Your name'
		selectionColor="#fff"
		placeholderTextColor="#ffffff"
		onSubmitEditing={()=> this.contactnumber.focus()}
		/>
		
		<TextInput style={styles.inputBox} 
		underlineColorIos='#fff' 
		placeholder='Your contact number'
		selectionColor="#fff"
		placeholderTextColor="#ffffff"
		ref={(input)=> this.contactnumber= input}
		onSubmitEditing={()=> this.emailaddress.focus()}
		/>
		
		<TextInput style={styles.inputBox} 
		underlineColorIos='#fff' 
		placeholder='Email'
		selectionColor="#fff"
		keyboardType="email-address"
		placeholderTextColor="#ffffff"
		ref={(input)=> this.emailaddress= input}
		onSubmitEditing={()=> this.password.focus()}
		/>
		
		<TextInput style={styles.inputBox} 
		underlineColorIos='#fff' 
		placeholder='Password'
		secureTextEntry={true}
		placeholderTextColor="#ffffff"
		selectionColor="#fff"
		ref={(input)=> this.password= input}
		/>
		
		<TouchableOpacity style={styles.btn} ><Text style={styles.btnText}>{this.props.type}</Text></TouchableOpacity >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 70,
	justifyContent: 'center',
	alignItems: 'center',
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
	  alignItems: 'center',
	  paddingVertical: 12,
	  backgroundColor: "#1c313a"
  }
  
});
