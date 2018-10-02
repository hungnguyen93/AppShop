import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity, FlatList
} from 'react-native';
import { width, height } from 'react-native-dimension';
const url = 'http://localhost:8080/api/images/product/';
export default class TopProduct extends Component {
    render() {
        const { product } = this.props;
        const { container, text, body, bodyImage, image, textName, textPrice } = styles;
        return (
            <View style={container}>
                <Text style={text}>TOP PRODUCT</Text>
                <View style={body}>
                    <FlatList
                        keyExtractor={(item, index) => item.id}
                        numColumns={2}
                        data={product}
                        renderItem={({ item }) => <TouchableOpacity
                            style={bodyImage}
                            onPress={()=>this.gotoProductDetail(item)}>
                            <Image style={image}
                                source={{ uri: `${url}${item.images[0]}` }}
                            />
                            <Text style={textName}>{item.name.toUpperCase()}</Text>
                            <Text style={textPrice}>{item.price}$</Text>
                        </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        );
    }
    gotoProductDetail = (item) => {
        const { navigate } = this.props.gotoProductDetail;
        navigate('ProductDetail', { item, quantity:1 });
    }
}
const styles = StyleSheet.create({
    container: {
        // height:height(50),
        backgroundColor: 'white',
        margin: height(1),
        shadowColor: '#474846',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
    },
    text: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#AFAEAF',
        padding: height(2),
        paddingTop: height(2),
    },
    body: {
        //alignItems:'center'
        //     flexDirection: 'row',
        //    flexWrap: 'wrap',

        // justifyContent: 'space-around'


    },
    image: {
        height: height(32),
        width: width(44),

    },
    bodyImage: {
        backgroundColor: 'white',
        shadowColor: '#474846',
        shadowOffset: { width: width(0), height: height(0.5) },
        shadowOpacity: 0.3
        , width: width(44),
        marginBottom: height(2),
        marginLeft: width(2.8)



    },
    textName: {
        paddingLeft: height(1),
        marginVertical: height(1),
        color: '#AFAEAF',
        fontFamily: 'Avenir',
        fontWeight: '500',
    },
    textPrice: {
        paddingLeft: height(1),
        color: '#662F90',
        fontFamily: 'Avenir',

    },

});