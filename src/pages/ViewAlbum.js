import React from 'react';
import {
AppRegistry,	
StyleSheet,
 Image,
 View,
 Text,
 ScrollView,
Dimensions } from 'react-native';
export default class ViewAlbum extends React.Component {
	
	
  render() {
	  let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView 
	  horizontal={true}
	  pagingEnabled={true}
	  showHorizontalScrollIndicator={true}
	  scrollIndicatorInsets={{top:10, left:10, bottom:10, right:10}}>
	  <View style={styles.container}>
		<Image 
		source={require('../images/logo.png')}
		style={{width:screenWidth, height:screenWidth * 699/600,}}></Image>
      <Text>this.props.item.name</Text>
	  </View>
	  
		</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex:1,
	alignItems:'center',
  },
});
