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
    var config = {};
    firebase.initializeApp(config);
  }

  render() {
    return (
        <LoginForm />
    );
  }
}

AppRegistry.registerComponent('auth', () => auth);
