import React from 'react';
import {
AppRegistry,	
StyleSheet,
 Image,
 View,
 Text,
 FlatList,
Dimensions,
TouchableOpacity,
RefreshControl } from 'react-native';
import AlbumsData from '../data/AlbumsData';
import {getAlbumsFromServer} from '../networking/Server';
import {Actions} from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';


class AlbumItem extends React.Component {
	
	static navigationOptions = {
    title: 'Welcome'
  };
  
	constructor(props){
		super(props);
		this.state = ({
			albumsFromServer: fetch('http://192.168.137.1/takunda/android/slim/api/albums'),
			refreshing: false,
		});
	}
	
	viewAlbum(){
		Actions.singleAlbum()
	}
	
	
	componentDidMout(){
		console.log(Albums);
		//this.refreshDataFromServer();
	}
	onRefresh=()=>{
		refreshDataFromServer();
	}
	refreshDataFromServer=()=>{
		this.setState({refreshing:true});
		getAlbumsFromServer().then((albums)=>{
			this.setState({albumsFromServer: albums});
			this.setState({refreshing:false});
		}).catch((error)=>{
			this.setState({albumsFromServer: []});
			this.setState({refreshing:false});
		});		
	}
	
	
	render(){
		
	//const { navigate } = this.props.navigation;
		return(
			<View style={styles.albumListItems}>
				<Image
					source={{uri: 'http://192.168.137.1/takunda/android/firmfaith/src/data/img/'+this.props.item.imageUrl}}
					style={{width:100, height:100, margin: 5,}}></Image>
				<View style={{flex:1, flexDirection:'column',}}>
					<Text style={styles.albumListItem}>{this.props.item.name}</Text>
					<Text style={styles.albumDetail}>{this.props.item.year}</Text>
					<Text style={styles.albumDetail}>{this.props.item.tracks}</Text>
					<Text style={styles.albumDetail}>{this.props.item.description}</Text>
					<Text style={styles.albumDetail}>Launched at: {this.props.item.launched}</Text>
					<View style={{alignItems: 'flex-end',}}>
					<TouchableOpacity style={styles.viewAlbumButton} onPress={this.viewAlbum}>
					<Text style={styles.listenLink}>Play>></Text>
					</TouchableOpacity>
					</View>
				</View>
					
			</View>
		);
	}
}

export default class Albums extends React.Component {
	
  render() {
	   return (
		<FlatList
		
			style={styles.flatList}
			data={AlbumsData}
			renderItem={({item, index})=>{
				return(
				<AlbumItem item={item} index={index}>
				
				</AlbumItem>
				);
			}
			}>
			
		</FlatList>
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
