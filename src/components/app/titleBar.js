/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


class HomeScreen extends React.Component {
	constructor(args) {
		super(args);
	}
	render() {
		return (
			<View style={styles.container}>
				<Icon name="list" size={24} style={styles.colorWhite} />
				<Text style={styles.colorWhite}>List</Text>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row',
		borderBottomWidth: 1,
		alignItems: 'stretch',
		flexDirection: 'column',
		backgroundColor: '#32B45D',
		borderBottomColor: '#26A34F',
	},
	colorWhite: {
		color: '#FFF'
	}
});

module.exports = HomeScreen;