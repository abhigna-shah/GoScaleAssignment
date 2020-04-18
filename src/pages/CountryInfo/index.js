/**
 * GoScale Assignment
 * Filename: pages CountryInfo index.js
 * created on 17th April 2020
 */

/** 
 * React Imports
 */
import React, { Component } from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

import CountryItem from './CountryItem';

export default class CountryInfo extends Component {

    /**
     * Creates an instance of CountryInfo.
     * @param {*} props
     * @memberof CountryInfo
     */
    constructor(props) {
      super(props);
      
      this.countryInfo = this.props.route.params;

      console.log("countryInfo: ", this.countryInfo);
    }

    /**
     * Main render method of the component
     */
    render() {
        return (
            <View style={styles.parentContainer}>
                <FlatList 
                    keyExtractor = {countryItemInfo => countryItemInfo.numericCode }
                    data = {this.countryInfo}
                    renderItem = { ({ item }) => {
                        return <CountryItem countryItem={item} navigation={this.props.navigation}/>;
                    }}
                />
            </View>  
        );
    }
}

/**
 * Styles required for "The CountryInfo component"
 */
const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
});