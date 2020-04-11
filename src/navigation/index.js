/**
 * GoScale Assignment
 * Filename: navigation index.js
 * created on 11th April 2020
 */

 /**
  * React Imports
  */
import React, { Component } from 'react';
import {
  SafeAreaView,
} from 'react-native';

/**
 * Thirdparty imports
 */
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Importing pages/screens 
 */
import Home from '../pages/Home';

const HomeStack = createStackNavigator();  

export default class MainRoute extends Component {
    
    render() {
      return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never' }}>
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
        </SafeAreaView>
      );
    }
}