import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';


const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
	const { inputStyle, containerStyle, labelStyle } = styles;
	return (
		<View style={ containerStyle }>
			<Text style={ labelStyle }> { label } </Text>
			<TextInput style={ inputStyle } secureTextEntry={ secureTextEntry } placeholder={ placeholder } value={ value } onChangeText={ onChangeText } />
		</View>
	);
}

const styles = {
	labelStyle: {
		fontSize: 18,
		flex: 1,
		color: 'black',
		paddingLeft: 5,
		paddingRight: 5,
		marginTop:10
	},
	inputStyle: {
		paddingLeft: 5,
		paddingRight: 10,
		flex: 2,
		height: 40
	},
	containerStyle: {
		flex: 3,
		flexDirection: 'row'
	}
}

export { Input };