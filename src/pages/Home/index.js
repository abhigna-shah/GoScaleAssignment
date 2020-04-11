/**
 * GoScale Assignment
 * Filename: pages Home index.js
 * created on 11th April 2020
 */

/** 
 * React Imports
 */
import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";

export default class Home extends Component {

    /**
     * Creates an instance of Home.
     * @param {*} props
     * @memberof Home
     */
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <View style={styles.parentContainer}>
               <Text>Home</Text>
            </View>  
        );
    }
}

/**
 * Styles required for "The Home component"
 */
const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
});