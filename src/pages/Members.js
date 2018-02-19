import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Dimensions,
    Image,} from 'react-native';
import getServerConnection from '../networking/Server';
export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    
    return fetch('http://www.cpstechnologies.co.za/Tests/slim/api/members')
    //return fetch('http://10.1.2.169/takunda/android/slim/api/members')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 50}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1,}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            

            <View>

		<Image
    source={{uri: 'http://www.cpstechnologies.co.za/Tests/members/'+rowData.imageUrl}}
		//source={{uri: 'http://10.1.2.169/takunda/android/firmfaith/src/members/'+rowData.imageUrl}}
		style={{width:Dimensions.get('window').width, height:Dimensions.get('window').width * 699/600,}}></Image>
      
	  <View style={styles.bio}>
	  
	  <View style={styles.row}>
	  <Text style={styles.headings}>{rowData.name}</Text>
	  </View>
	  
	  <Text>Position: {rowData.position}</Text>
	  <Text>Joined: {rowData.joined}</Text>
	  <Text>Profession: {rowData.Profession}</Text>
	  <Text style={styles.headings}>Bio</Text>
	  <Text>{rowData.bio}</Text>
	  </View>
	  
	  </View>}
        />
      </View>
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
  