import React from 'react';
import {
AppRegistry,	
StyleSheet,
 Image,
 View,
 Text,
 FlatList,
Dimensions } from 'react-native';
import MembersData from '../data/MembersData';



class EachMember extends React.Component {

	render(){
		return(
	<View>
	
		<Image 
		source={{uri: 'http://192.168.137.1/takunda/android/firmfaith/src/images/'+this.props.item.imageUrl}}
		style={{width:Dimensions.get('window').width, height:Dimensions.get('window').width * 699/600,}}></Image>
      
	  <View style={styles.bio}>
	  
	  <View style={styles.row}>
	  <Text style={styles.headings}>{this.props.item.name}</Text>
	  </View>
	  
	  <Text>Position: {this.props.item.position}</Text>
	  <Text>Joined: {this.props.item.joined}</Text>
	  <Text>Profession: {this.props.item.Profession}</Text>
	  <Text style={styles.headings}>Bio</Text>
	  <Text>{this.props.item.bio}</Text>
	  </View>
	  
	  </View>
		);
	}
}



export default class Members extends React.Component {
	
	
  render() {
	  let screenWidth = Dimensions.get('window').width;
    return (
      <FlatList
		
			style={styles.flatList}
			data={MembersData}
			renderItem={({item, index})=>{
				return(
				<EachMember item={item} index={index}>
				
				</EachMember>
				);
			}
			}>
			
		</FlatList>
    );
  }
}

const styles = StyleSheet.create({
  bio: {
    backgroundColor: '#ffffff',
	alignItems:'flex-start',
	padding:10,
	marginRight:5,
	width:Dimensions.get('window').width,
  },
  headings: {
	fontSize:20,
  },
  row: {
	flexDirection:'row',
  },
});
