import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/logo.png')}
			style={{width: 65, height: 90}} />
			
		<Text style={styles.LogoText}>Firm Faith Music</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 30,
	justifyContent: 'flex-end',
	alignItems: 'center',
	marginBottom: 30,
	marginTop: 15,
  },
  LogoText: {
	fontSize:18,
	color:'#fff',
	marginTop: 15,
  },
});
