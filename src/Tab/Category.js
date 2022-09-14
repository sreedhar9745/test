import React, {Component} from "react";
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import { createIconSet } from "react-native-vector-icons";
import axios from 'axios'

export default class Category extends Component {

    constructor(){
        super();
        this.state = {
            loader: false,
            DATA: []
        }
    }

    getData(){
        this.setState({loader: true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response) => response.json())
        .then((response)=> {
            if(response.length>0){
                this.setState({DATA: response})
            }
            this.setState({loader: false})
            // console.log('YOUR RESPONSE IS:', response)
        })
        .catch((error) => {
            this.setState({loader: false})
            console.log('ERROR IS:',error)
        })
    }

    getAxiosData(){
        this.setState({loader: true})
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((response)=> {
            this.setState({loader: false})
            console.log('AXIOS:RESPONSE',response)
        })
        .catch((error)=> {
            this.setState({loader: false})
            console.log('AXIOS:ERROR',error)
        })
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        const renderItem = ({item}) => (
           <View style= {styles.itemContainer}>
               <Text style= {styles.itemText}>{item.title}</Text>
               <Text style= {styles.itemDes}>{item.description}</Text>
           </View> 
        )
        return(
            <View style= {styles.container}>
                <ActivityIndicator size = {50} color= 'blue' animating= {this.state.loader}/>
                <Text style= {styles.homeText}
                    onPress= {()=> this.getAxiosData()}>Hi This Is Category List</Text>
                <FlatList style= {{width: '95%',marginTop: 10}}
                    data= {this.state.DATA}
                    renderItem= {renderItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    homeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 4,
        marginBottom: 10

    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemDes: {
        fontSize: 14,
        color: '#369',
        fontWeight: 'bold',
        marginTop: 10
    }
})