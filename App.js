/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './src/Screen/LoginScreeen.js'
import DashboardScreen from './src/Screen/DashboardScreen.js';
import SubCategoryScreen from './src/Screen/SubCategorieScreen.js';
import {createAppContainer,createStackNavigator} from 'react-navigation';

const App = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Dashboard: {
    screen: DashboardScreen,
  },
  SubCategory: {
    screen: SubCategoryScreen,
  }
});

 export default createAppContainer(App);

// export default class App extends Component {
//   render() {
//     return (
//       <SubCategorieScreen  />
//     );
//   }
// }

//export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
