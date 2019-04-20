import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component{
	
	state = {email: '', password: '', error: ''};	

	onButtonSubmit(){
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
		.catch( () => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.catch( () => {
				this.setState({ error: 'Authentication Failed'});
			})
		})
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input label='Email' value={ this.state.email } placeholder='Enter Email' onChangeText={ email => this.setState({ email }) } />
				</CardSection>
				<CardSection>
					<Input label='Password' secureTextEntry={ true } value={ this.state.password } placeholder='Enter Password' onChangeText={ password => this.setState({ password }) } />
				</CardSection>
				<Text style={ styles.textStyle }>{ this.state.error }</Text>
				<CardSection>
					<Button onPress={ () => this.onButtonSubmit() }>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	textStyle: {
		color: 'red',
		alignSelf: 'center'
	}
}