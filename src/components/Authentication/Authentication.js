import React, { Component } from 'react';
import {
    View, StyleSheet, TouchableOpacity, Text, Image, TextInput
} from 'react-native';
import SignIn from './SigIn';
import Register from './Register';
import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';


import { width, height } from 'react-native-dimension';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignin: false,
        }
    }
    render() {
        const { container } = styles;
        const main = this.state.isSignin
            ?
            <Register
                signIn={this.signIn}
                isColor={this.state.isColor}
                goback={()=>this.gotoBackMain()}

            />
            :
            <SignIn signUp={this.signUp}
                goback={this.gotoBackMain}
            />
        return (
            <View style={container}>
                {main} 
            </View>
        )
    }

    signIn = () => {
        this.setState({
            isSignin: false
        })
    };
    signUp = () => {
        this.setState({
            isSignin: true
        })
    };
    gotoBackMain = () => {
        this.props.navigation.goBack();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#55B97F',
        justifyContent: 'space-between',
    },
    icon: {
        height: height(4), width: width(7),
    },
})

