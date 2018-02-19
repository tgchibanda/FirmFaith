import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Dimensions,
    Image, TouchableOpacity} from 'react-native';

export default class Notices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://www.cpstechnologies.co.za/Tests/slim/api/notices')
    //return fetch('http://10.1.2.169/takunda/android/slim/api/notices')
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
    const { navigate } = this.props.navigation;
    
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 10}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1,}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            

            <View style={styles.albumListItems}>
				<Image
          source={{uri: 'http://www.cpstechnologies.co.za/Tests/data/img/'+rowData.imageUrl}}
          //source={{uri: 'http://10.1.2.169/takunda/android/firmfaith/src/data/img/'+rowData.featured_image}}
					style={{width:Dimensions.get('window').width, margin: 5,}}></Image>
				<View style={{flex:1, flexDirection:'column',}}>
					<Text style={styles.albumListItem}>{rowData.date}</Text>
					<Text style={styles.albumDetail}>{rowData.title}</Text>
					<Text style={styles.albumDetail}>{rowData.details}</Text>
					<View style={{alignItems: 'flex-end',}}>
					<TouchableOpacity onPress={() => navigate('NoticeComments', { name: rowData.name })}><Text>Comment</Text></TouchableOpacity >
					</View>
				</View>
					
			</View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    flatList:{
          height:Dimensions.get('window').height,
    },
    albumListItems: {
          backgroundColor:'white',
          flexDirection:'row',
          borderBottomWidth: 1,
          marginBottom: 2,
          borderColor: '#cccccc',
      },
      albumListItem: {
          color: 'black',
          paddingLeft: 10,
          paddingTop:5,
          fontSize: 16,
          fontWeight:'500'
          
      },
      albumDetail: {
          color: 'black',
          paddingLeft: 10,
          
      },
      viewAlbumButton: {
          backgroundColor:'#aaaaaa',
          width:70,
          borderRadius: 25,
          alignItems: 'center',
          margin: 5,
          marginRight:10,
      },
      listenLink: {
          color: 'white',
      }
  });
  