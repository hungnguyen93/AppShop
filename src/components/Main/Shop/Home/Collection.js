import React, { Component } from 'react';
import {
    Text, StyleSheet, Image, View, TouchableOpacity
} from 'react-native';
import { width, height } from 'react-native-dimension';
import bannerImage from '../../../../media/temp/banner.jpg'
export default class Colection extends Component {
    render() {
        const { container, text, image } = styles;
        return (
            <TouchableOpacity style={container}
            >
                <Text style={text}>SPRING COLLECTION</Text>
                <Image source={bannerImage}
                    style={image}
                />
            </TouchableOpacity>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
        height: height(35), backgroundColor: 'white',
        margin: height(1), shadowColor: '#474846',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5
    },
    text: {
        marginTop: height(1), marginLeft: height(1),
        fontSize: 20, color: '#AFAEAF',
        fontFamily: 'Avenir'
    },
    image: {
        height: height(29), marginLeft: height(1),
        marginRight: height(1), marginBottom: height(2),
        width: width(93)
    }
})