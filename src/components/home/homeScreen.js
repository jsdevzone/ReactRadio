/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import TitleBar from '../app/titleBar';

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
				<TitleBar />
			</View>
		);
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		flexDirection: 'column'
	}
});

module.exports = HomeScreen;