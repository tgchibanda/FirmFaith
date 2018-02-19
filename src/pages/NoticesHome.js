import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View, StatusBar } from 'react-native';
import Notices from './Notices';
import NoticeComments from './NoticeComments';
	

const notice = StackNavigator({
  NoticesHome: { screen: Notices, navigationOptions: {
    headerTitle: 'Notice Board',
           }, 
        },
    NoticeComments: { screen: NoticeComments },

});

export default notice;


