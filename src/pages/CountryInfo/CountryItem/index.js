/**
 * GoScale Assignment
 * Filename: pages CountryInfo CountryItem index.js
 * created on 17th April 2020
 */

/** 
 * React Imports
 */
import React, { Component } from "react";
import {View, Text, StyleSheet, Dimensions, Image} from "react-native";

/**
 * Third party imports
 */
import FastImage from 'react-native-fast-image';
import SvgUri from 'react-native-svg-uri';

export const windowWidth = Dimensions.get('window').width;

export default class CountryItem extends Component {

    /**
     * Creates an instance of CountryItem.
     * @param {*} props
     * @memberof CountryItem
     */
    constructor(props) {
      super(props);

      this.countryInfo = this.props.countryItem;
    }

    /**
     * Main render method of the component
     */
    render() {

        let countryName = "Name: " +  this.countryInfo.name;
        let capital = "Capital: " + this.countryInfo.capital;
        let population = "Population: " + this.countryInfo.population;
        let latitude = "Latitude: " + this.countryInfo.latlng[0];
        let longitude = "Longitude: " + this.countryInfo.latlng[1];

        return (
            <View style={styles.parentContainer}>
                <View style={styles.dataContainerViewStyle}>
                    <Image 
                        style = {styles.imageStyle}
                        source={{
                            uri: this.countryInfo.flag,
                        }}
                     />
                     {/* <SvgUri
                        style = {styles.imageStyle}
                        source={{
                            uri: this.countryInfo.flag,
                        }}
                     /> */}
                     <View style={styles.textContinerViewStyle}>
                        <Text>{countryName}</Text>
                        <Text>{capital}</Text>
                        <Text>{population}</Text>
                        <Text>{latitude}</Text>
                        <Text>{longitude}</Text>
                     </View>
                    {/* <FastImage 
                        style={styles.imageStyle}
                        source={{
                            uri: this.countryInfo.flag,
                        }}
                        resizeMode= {FastImage.resizeMode.contain}
                    />     */}
                </View>
                <View style={styles.weatherViewStyle}>
                    <Text>Captital Weather</Text>
                </View>
            </View>  
        );
    }
}

/**
 * Styles required for "The CountryItem component"
 */
const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor:"black",
        borderWidth: 1,
    },
    dataContainerViewStyle: {
        flexDirection: "row",
    },
    imageStyle: {
        height: 100,
        width: 100,
        borderColor:"black",
        borderWidth: 0.5,
    },
    textContinerViewStyle: {
        flexDirection: "column",
        marginLeft: 10,
    },
    weatherViewStyle: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderColor:"black",
        borderWidth: 0.5,
        margin: 5,
    }
});