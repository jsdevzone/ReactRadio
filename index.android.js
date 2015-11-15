/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import HomeScreen from './src/components/home/homeScreen';
let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  DrawerLayoutAndroid,
} = React;


let _initialRoute = { title: 'Home', component: HomeScreen };

class ReactRadio extends React.Component {
  renderScene(route, navigator) {
    let Component = route.component;
    return (<Component navigator={navigator} {...route.props} />);
  }

  render() {
      var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I am in the Drawer!</Text>
    </View>
  )
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <Navigator
        debugOverlay={false}
        initialRoute={_initialRoute}
        configureScene={this.configureScene}
        renderScene={this.renderScene} />
      
    </DrawerLayoutAndroid>
  );
  }
}

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('ReactRadio', () => ReactRadio);
