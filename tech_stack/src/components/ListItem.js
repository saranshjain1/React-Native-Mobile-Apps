import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component{

	componentWillUpdate(){
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, selectedLibraryId } = this.props;
		if (library.id == selectedLibraryId){
			return (
				<View>
					<Text>{library.description}</Text>
				</View>
			);
		}
	}

	render(){
		const { id, title } = this.props.library;
		return (
			<TouchableWithoutFeedback 
				onPress={ () => this.props.selectLibrary(id) }
			>
				<View>
					<CardSection>
						<Text>{title}</Text>
					</CardSection>
					{ this.renderDescription() } 
				</View>
			</TouchableWithoutFeedback>
		);
	}
};

const styles = {
	textStyle: {
		fontSize: 18,
		paddingLeft: 5,
		paddingRight: 5
	}
};

const mapStateToProps = state => {
	return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);