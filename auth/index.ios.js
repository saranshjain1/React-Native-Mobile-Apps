/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class auth extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCD0s6EG0T3wsvYDIpNrBfhWfZrB8_GFQY",
      authDomain: "auth-3d304.firebaseapp.com",
      databaseURL: "https://auth-3d304.firebaseio.com",
      projectId: "auth-3d304",
      storageBucket: "",
      messagingSenderId: "445585099885"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
        <LoginForm />
    );
  }
}

AppRegistry.registerComponent('auth', () => auth);
