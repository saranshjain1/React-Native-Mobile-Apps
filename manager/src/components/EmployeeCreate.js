import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common/';
import { employeeAction, employeeCreate } from '../actions/';
import { Picker } from 'react-native';
import { connect } from 'react-redux';

class EmployeeCreate extends Component{

	onButtonPress(){
		const {name, phone, shift} = this.props;
		this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
	}

	render(){
		return (
			<Card>
				<CardSection>
					<Input label="Name" placeholder="Jane" value={this.props.name} onChangeText={(value) => this.props.employeeAction({prop: 'name', value})}  />
				</CardSection>
				<CardSection>
					<Input label="Phone Number" placeholder="555-555-555" value={this.props.phone} onChangeText={(value) => this.props.employeeAction({prop: 'phone', value})} />
				</CardSection>
				<CardSection>
					<Picker
						style={{flex: 1}}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeAction({ prop: 'shift', value})}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.onButtonPress()}>Create</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return {name, phone, shift};
}

export default connect(mapStateToProps, { employeeAction, employeeCreate })(EmployeeCreate);