import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Test from './pages/Test';
import ViewAlbum from './pages/ViewAlbum';

export default class Routes extends React.Component {
	render(){
		return(<Router>
					<Stack key="root" hideNavBar={false}>
					  <Scene key="signin" component={Login} title="Login"/>
					  <Scene key="signup" component={Signup} title="Register"/>
					  <Scene key="main" component={Main} title="Changing Lives"/>
					  <Scene key="singleAlbum" component={ViewAlbum} title="Single Album"/>
					</Stack>
  </Router>)
	}
}