import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({ size, color }) => {
	const { spinnerStyle } = styles;
	return (
		<View style={ spinnerStyle }>
			<ActivityIndicator size={ size } color={ color } />
		</View>
	);
}

const styles = {
	spinnerStyle: {
		position: 'relative';
	}
}

export { Spinner }