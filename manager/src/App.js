import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm  from './components/LoginForm';
import Router from './Router';

class App extends Component{

	componentWillMount(){
		var config = {
		    apiKey: "AIzaSyCWbvZq2XWlq96toAvDc0Qx96dNRz4UPHg",
		    authDomain: "manager-8e222.firebaseapp.com",
		    databaseURL: "https://manager-8e222.firebaseio.com",
		    projectId: "manager-8e222",
		    storageBucket: "manager-8e222.appspot.com",
		    messagingSenderId: "1098083744214"
		};
	    firebase.initializeApp(config);
	}

	render(){

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={ store }>
				<Router />
			</Provider>
		);
	}
}

export default App;