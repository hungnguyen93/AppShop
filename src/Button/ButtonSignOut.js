import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet,

} from 'react-native';
import { width, height } from 'react-native-dimension';

export default class ButtonSignIn extends Component {
    render() {
        const { container, btnStyle, btnText, textName } = styles;

        return (
            <View style={container}>
                <Text style={textName}>Nguyen Quoc Hung</Text>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={btnStyle}
                        onPress={this.props.OrderHistory}
                    >
                        <Text style={btnText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle}
                        onPress={this.props.ChangeInfo}
                    >
                        <Text style={btnText}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle}
                        onPress={this.props.Authentication}
                    >
                        <Text style={btnText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', marginTop: height(3)
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
        fontSize: 14
    },
    textName: {
        color: 'white',
        fontFamily: 'Avenir'
    },
});