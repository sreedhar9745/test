import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native'

export default class Search extends Component {
    render(){
        return(
            <View style= {styles.container}>
                <Text style= {styles.homeText}>Hi This Is Search page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    homeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    }
})