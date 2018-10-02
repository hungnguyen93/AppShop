import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Image, TextInput, alert
} from 'react-native';
import { width, height } from 'react-native-dimension';
import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';
export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInColo: true
        }
    }
    render() {
        const { inActiveStyle, ActiveStyle, icon, container, header, text, btnButtonLeft,
            btnButtonRight, viewButton, body, inputStyle, btnSignNow } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity 
                    onPress={this.props.goback}>
                        <Image source={icBack}
                            style={icon}
                        />
                    </TouchableOpacity>
                    <Text style={text}>Wearing a Dress</Text>
                    <Image source={icLogo}
                        style={icon}
                    />
                </View>
                <View style={body}>
                    <TextInput style={inputStyle} placeholder="Enter your email"></TextInput>
                    <TextInput style={inputStyle} placeholder="Enter your password"></TextInput>
                    <TouchableOpacity style={btnSignNow}>
                        <Text style={text}>Sign In Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={viewButton}>
                    <TouchableOpacity style={btnButtonLeft}
                        onPress={this.props.signIn}
                    >
                        <Text style={inActiveStyle}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnButtonRight}
                        onPress={this.props.signUp}
                    >
                        <Text style={ActiveStyle}>Sign Up</Text>
                    </TouchableOpacity >
                </View>
            </View>
        );
    }
    // gotoBackMain =()=> {
    //     this.props.navigation.goBack();
    // }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#55B97F',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: height(1.5),

    },
    textInput: {
        backgroundColor: 'white',
        marginLeft: height(1.5),
        marginRight: height(1.5),
        paddingLeft: height(3),
        fontFamily: 'Avenir', fontSize: 15,
        height: height(5)
    },
    icon: {
        height: height(4), width: width(7),
    },
    text: {
        color: "white", fontFamily: 'Avenir', fontSize: 20
    },
    viewButton: {
        flexDirection: 'row',
        marginBottom: height(6),
        justifyContent: 'center'

    },
    btnButtonLeft: {
        backgroundColor: 'white',
        width: width(40), height: height(7),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: height(0.25)

    },
    btnButtonRight: {
        backgroundColor: 'white',
        width: width(40), height: height(7),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: height(0.25)
    },
    ActiveStyle: {
        color: '#333333'
    },
    inActiveStyle: {
        color: '#55B97F' 
    },
    inputStyle: {
        height: height(7),
        width: width(80),
        backgroundColor: 'white',
        marginBottom: height(2),
        paddingLeft: height(5),
        borderRadius: 35,
    },
    btnSignNow: {
        width: width(80), height: height(7),
        backgroundColor: '#55B97F',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white'
    },
    body: {
        width: width(100),
        justifyContent: 'center',
        alignItems: 'center',

    }
})