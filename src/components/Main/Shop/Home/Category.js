import React, { Component } from 'react';
import {
    Text, StyleSheet, View, ImageBackground, TouchableOpacity
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Swiper from 'react-native-swiper';
import icLittle from '../../../../media/temp/little.jpg';
import icMaxi from '../../../../media/temp/maxi.jpg';
import icParty from '../../../../media/temp/party.jpg';

const url = 'http://localhost:8080/api/images/type/'
export default class Category extends Component {
    render() {
        const { container, text, Image, textImage } = styles;
        const { types } = this.props;
        return (
            <View style={container}>
                <Text style={text}>LIST OF CATEGORY</Text>
                <Swiper activeDotColor={'black'} showsPagination >
                    {types.map(e => (
                        <TouchableOpacity onPress={this.gotoListProduc} key ={e.id}>
                            <ImageBackground source={{uri:`${url}${e.image}`}} style={Image} >
                                <Text style={textImage}>{e.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity >
                    ))}
                </Swiper>
            </View>
        );
    }
    gotoListProduc = () => {
        const { navigate } = this.props.gotoListProduc;
        navigate('ListProduct');
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
    Image: {
        height: height(29), marginLeft: height(1),
        marginRight: height(1), marginBottom: height(2),
        width: width(93),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textImage: {
        fontFamily: 'Avenir', fontSize: 20,
        color: '#AFAEAD'
    }
})