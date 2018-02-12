import React from 'react';
import {
AppRegistry,	
StyleSheet,
 Image,
 View,
 Text,
 FlatList,
Dimensions } from 'react-native';

const apiGetAllAlbums = 'http://10.10.10.3/takunda/android/slim/api/albums';
async function getAlbumsFromServer(){
	try{
		let response = await fetch(apiGetAllAlbums);
		let responseJson = await response.json();
		return responseJson.data;
	}
	catch (error){
		console.error(`Error is : ${error}`);
	}
}
export {getAlbumsFromServer};