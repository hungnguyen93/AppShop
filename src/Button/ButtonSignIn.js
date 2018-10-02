import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet,

} from 'react-native';
import { width, height } from 'react-native-dimension';

export default class ButtonSignIn extends Component {
    render() {
        const {btnStyle, btnText, container } = styles;

        return (
            <View style={container}>
                <TouchableOpacity style={btnStyle}
                onPress={() => this.gotoAunthentication()}
                >
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
    gotoAunthentication() {
        // const {navigate} = this.props.a;
        // navigate('Authentication')
        this.props.navigation.navigate('Authentication');
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btnStyle: {
        marginTop: height(2),
        height: height(6),
        width: width(44),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: height(1),

    },
    btnText: {
        color: '#55B97F',
        fontFamily: 'Avenir',
        fontSize: 16
    },
});