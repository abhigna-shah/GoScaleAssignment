/**
 * GoScale Assignment
 * Filename: pages Home index.js
 * created on 17th April 2020
 */

/** 
 * React Imports
 */
import React, { Component } from "react";
import {View, StyleSheet, TextInput, Button, Alert, InteractionManager} from "react-native";

/**
 * Custom Imports
 */
import Loader from '../../Components/Loader/Loader';

export default class Home extends Component {

    /**
     * Creates an instance of Home.
     * @param {*} props
     * @memberof Home
     */
    constructor(props) {
      super(props);
      this.state = {
        isSubmitDisabled: true,
        showLoader: false,
      }

      this.countryName = "";
    }

    /**
     * This method is triggered on text change of 
     * country text Input
     *
     * @memberof Home
     */
    onCountryTextChange = (text) => {
        let countryText = text.trim();
        if (countryText.length > 0 ){
            this.setState({
                isSubmitDisabled: false,
            });
        } else {
            this.setState({
                isSubmitDisabled: true,
            });
        }
        this.countryName = countryText;
    }

    /**
     * Click event triggered when submit button tapped
     *
     * @memberof Home
     */
    submitButtonClicked = () => {
        this.setState({
            showLoader: true,
        });
        this.fetchCountryInfo();
    }

    showAlertMessage = (message) => {
        Alert.alert("asdasdasd");
    }

    parseCountryInfoRecieved = () => {

    }

    /**
     * This function calls api for fetching information 
     * for Country based on keywords or name
     * 
     * Note: I prefer to use Axios or API sauce library from API service 
     * common class to make API calls. 
     * Inorder to save time I am making fetch API calls
     *
     * @memberof Home
     */
    async fetchCountryInfo() {
        let countryInfoUrl = 'https://restcountries.eu/rest/v2/name/' + this.countryName;
        await fetch(countryInfoUrl, {method: "GET"})
        .then((response) => response.json())
        .then ((responseData) => {
            this.setState({
                showLoader: false,
            }, () => {
                this.parseCountryInfoRecieved(responseData)
            });

            if (Array.isArray(responseData)) {
                // Proceed to Country information screen
                let countryInfo = responseData;
                this.props.navigation.navigate('CountryInfo', countryInfo);
            } else {

                let alertMsg = responseData.status + " " + responseData.message;
                // Show alert message
                setTimeout(() => {
                    InteractionManager.runAfterInteractions(() => {
                        Alert.alert(alertMsg);
                    });
                }, 500);
            }
        })
        .catch((error) => {
            console.log("Error in fetching Country Info:", error);
            this.setState({
                showLoader: false,
            });

            // Show alert message
            setTimeout(() => {
                InteractionManager.runAfterInteractions(() => {
                    Alert.alert('Something went wrong.');
                });
            }, 1000);
        });
    }

    /**
     * Main render method of the component
     */
    render() {
        return (
            <View style={styles.parentContainer}>
                <Loader loading={this.state.showLoader} />
               <TextInput 
                  style= {styles.countryTxtInputStyle}
                  placeholder = "Enter country"
                  maxLength={74}
                  onChangeText={this.onCountryTextChange}
                  returnKeyType="done"
                  selectionColor="black"
               />
               <Button 
                 title="Submit"
                 disabled={this.state.isSubmitDisabled}
                 onPress={this.submitButtonClicked}
               />
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
    countryTxtInputStyle: {
        margin: 20,
        height: 60,
        borderWidth: 1,
        borderColor: "black",
        fontSize: 20,
        textAlign: 'center',
    }
});