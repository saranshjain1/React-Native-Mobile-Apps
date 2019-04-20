import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common/';
import { Actions } from 'react-native-router-flux';


class ListItem extends Component{

	onRowPress(){
		const { employee } = this.props;
		Actions.createEmployee(employee: employee);
	}

	render(){
		const { name } = this.props.employee;
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.textStyle}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}

}

const styles = {
	textStyle: {
		fontSize: 18
	}
}

export default ListItem;