import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

class FlexContent extends Component {
    render(){
        return(
            <View>
                <Text style= {styles.contentStyle}>Hi My Name is {this.props.name}</Text>
                
            </View>
        )
    }
}

export default class Flexbox extends Component{
    constructor(){
        super();
        this.state= {
            main_text: 'Hello',
            sub_text: 'React'
        }
    }

    componentDidMount(){
        console.log('the username is: ',this.props.route.params.username)
    }

    updateText(){
        this.setState({
            main_text: 'Hi (Hello updated)',
            sub_text: 'Framework (React updated)'
        })
    }

    render(){
        return(
            <View style= {styles.container}>
                <Text style= {styles.text}>{this.state.main_text}</Text>
                <Text style= {styles.text}> {this.state.sub_text} </Text>
                <Text style= {styles.text}> Native </Text>
                <TouchableHighlight style= {styles.button}
                    underlayColor= 'red'
                    onPress= {()=> this.updateText()}>
                    <Text style= {styles.buttonText}>UPDATE</Text>
                </TouchableHighlight>
                <TouchableHighlight style= {styles.button}
                    underlayColor= '#ffffff'
                    onPress= {()=> this.props.navigation.navigate('Drawer')}>
                    <Text style= {styles.buttonText}>CLICK HERE</Text>
                </TouchableHighlight>

                <FlexContent name = {this.props.route.params.username}>
                </FlexContent>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row'
    },
    text: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold'
    },
    button: {
        width: '60%',
        height: 55,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 20
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    contentStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#369',
        marginTop: 20
    }
})