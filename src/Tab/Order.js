import React, {Component} from "react";
import {View, Text, StyleSheet,ImageBackground} from 'react-native'

export default class Order extends Component {
    render(){
        return(
            <View style={styles.container}>
                 
                <ImageBackground source= {require('../../assets/bg.jpg')}
                style= {styles.backgroundImage}>


            </ImageBackground>
        </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    backgroundImage :{
        height:'100%',
        width:'100%'

    }

   

    
})