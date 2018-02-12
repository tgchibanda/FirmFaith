import React from 'react';
import {
AppRegistry,	
StyleSheet,
 Image,
 View,
 Text,
 ScrollView,
Dimensions } from 'react-native';
import Members from './Members';
import Albums from './Albums';
export default class Main extends React.Component {
	
	
  render() {
	  let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView 
	  horizontal={false}
	  pagingEnabled={false}>
	  <View style={styles.container}>
		<Image 
		source={require('../images/main.png')}
		style={{width:screenWidth, height:screenWidth * 699/600,}}></Image>
      
	  
	  <View style={styles.header}><Text style={styles.headerText}>BIOGRAPHY</Text></View>
	  <View style={styles.biographyContent}>
	  
	  <Text style={styles.biographyText}>Firm Faith is a mixed "male and female" Seventh Day Adventist acapella group, 
	  affiliated to Chisipite Adventist Church in Harare Zimbabwe. The group was formed in the year 2006.</Text>
	  
	  <View style={styles.paragraph}>
	  <Text style={styles.biographyText}>Firm Faith sings at Funerals, Weddings, Prisons, Church Programmes, Business Functions
	  , Children's Homes and Old People's Homes.</Text>
	  </View>
	  
	  <View style={styles.paragraph}>
	  <Text style={styles.biographyText}>Firm Faith has once won the Harare's Got Talent competition and has also had the 
	  previledge of sharing a stage with Pastor Donnie McClurkin and Solly Mahlangu.</Text>
	  </View>
	  
	  </View>
	  
	  </View>
	  
	  <View style={styles.header}><Text style={styles.headerText}>OBJECTIVES</Text></View>
	  
	  <View style={styles.biographyContent}>
	  
	  <Text style={styles.biographyText}>To spread the word of God through music.</Text>
	  
	  <View style={styles.paragraph}>
	  <Text style={styles.biographyText}>To change lives through music.</Text>
	  </View>
	  
	  </View>
	  
		</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex:1,
  },
  header: {
	backgroundColor: "green",
	alignItems:'center',
	width: Dimensions.get('window').width,
  },
  headerText: {
	color: 'white', 
	fontWeight: '900',
	fontSize: 20,
	padding: 10,
	
  },
  biographyContent: {
	padding: 12,
	alignItems: 'flex-start',
  },
  biographyText: {
	  color:'black',
  },
  paragraph: {
	  paddingTop: 12,
  },
});
