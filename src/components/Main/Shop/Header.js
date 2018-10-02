import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity,
    Dimensions, StyleSheet, TextInput
} from 'react-native';

import { width, height, totalSize } from 'react-native-dimension';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';
export default class Header extends Component {
    render() {
        return (
            <View style={{ height: height(14), backgroundColor: '#55B97F' }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>Wearing a Dress</Text>
                    <Image source={icLogo}
                        style={styles.icon}
                    />
                </View>
                <TextInput style={styles.textInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
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

})
{/* <TouchableOpacity onPress={this.props.onOpen}>
                    <Text>Open Menu</Text>
                </TouchableOpacity> */}