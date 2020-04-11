/**
 * GoScale Assignment
 * 
 * created on 11th April 2020
 */
import 'react-native-gesture-handler';
/**
 * React Imports
 */
import React, { Component } from 'react';

/**
 * Third party Imports
 */
import { NavigationContainer } from '@react-navigation/native';

/**
 * Route definining App's Navvigation stack
 */
import MainRoute from './src/navigation';

class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
    );
  }
}

export default App;
