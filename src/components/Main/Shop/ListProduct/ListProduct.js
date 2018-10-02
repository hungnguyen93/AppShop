import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ScrollView, Image
} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import backList from '../../../../media/appIcon/backList.png';
import { width, height } from 'react-native-dimension';
export default class ListProduct extends Component {
    render() {
        const { container, header, wrapper, icBack, titleStyle,
            productContainer, productInfo, productImage, EndInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail, color
        } = styles;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goback}>
                            <Image source={backList}
                                style={icBack}
                            />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View />
                    </View>
                    <ScrollView>
                        <View style={productContainer}>
                            <Image style={productImage} source={sp1} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={EndInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={color} />
                                    <TouchableOpacity>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={sp1} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={EndInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={color} />
                                    <TouchableOpacity>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={sp1} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={EndInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={color} />
                                    <TouchableOpacity>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={sp1} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={EndInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={color} />
                                    <TouchableOpacity>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
    goback = () => {
        this.props.navigation.goBack();
    }
    goToProductDetail = () => {
        this.props.navigation.navigate('ProductDetail')
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D8D9D5',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: height(8),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: height(2)


    },
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        margin: height(1),
        shadowColor: '#474846',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3


    },
    icBack: {
        height: height(4),
        width: width(4),
    },
    titleStyle: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#A53D6F',
        marginRight: height(4),
    },
    productImage: {
        height: height(18),
        width: width(25),
        margin: height(2)
    },
    productInfo: {
        justifyContent: 'space-between',
        height: height(18),
        flex: 1,
        paddingRight: height(1)
    },
    productContainer: {
        flexDirection: 'row',
        height: height(20),
        alignItems: 'center',
        borderTopColor: '#F6F7F3',
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderWidth: height(0.2)
    },
    EndInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#767775'
    },
    txtColor: {
        fontFamily: 'Avenir',

    },
    txtMaterial: {
        fontFamily: 'Avenir',

    },
    txtPrice: {
        color: '#A53D6F'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#A53D6F',
        fontSize: 11


    },
    color: {
        backgroundColor: 'blue',
        height: height(2),
        width: width(4),
        borderRadius: height(1)
    }
});