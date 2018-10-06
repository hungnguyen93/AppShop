import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, AsyncStorage,
    Dimensions, StyleSheet, Image, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { Quantity } from '../../../../redux/actions/Quantity';
import { delete_product } from '../../../../redux/actions/delete_product';
import saveCart from '../../../../api/saveCart';

const url = 'http://localhost:8080/api/images/product/';
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
} // function sua kys tu dau tien viet hoa. VD: nguyen quoc hung thanh Nguyen Quoc Hung

class CartView extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0
        }
    }
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    _quantity = (type, id) => {
        this.props.Quantity(type, id)
    }
    render() {
        const { arrCartd } = this.props;
        saveCart(arrCartd);
        const { checkoutButton, checkoutTitle, wrapper } = styles;
        return (
            <View style={wrapper}>
                <FlatList
                    data={arrCartd}
                    renderItem={({ item }) => this._renderItems(item)}
                    keyExtractor={(item, index) => item.id}
                />
                <TouchableOpacity style={checkoutButton}
                    onPress={() => this._total(arrCartd)}
                >
                    <Text style={checkoutTitle}>TOTAL {this.state.total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _renderItems = (item) => {
        const {
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        return <View style={product}>
            <Image source={{ uri: `${url}${item.images[0]}` }} style={productImage} />
            <View style={[mainRight]}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={txtName}>{toTitleCase(item.name)}</Text>
                    <TouchableOpacity
                        onPress={() => this._delete(item.id)}
                    >
                        <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={txtPrice}>{item.price}$</Text>
                </View>
                <View style={productController}>
                    <View style={numberOfProduct}>
                        <TouchableOpacity onPress={() => this._quantity('ADD_QUANTITY', item.id)}>
                            <Text>+</Text>
                        </TouchableOpacity>
                        <Text>{item.quantity}</Text>
                        <TouchableOpacity onPress={() => this._quantity('DECREASE_QUANTITY', item.id)}>
                            <Text>-</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={showDetailContainer}>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }

    _total = (item) => {
        let arr = [];
        item.map(item => {
            const total = item.price * item.quantity;
            arr.push(total);
        });
     const total = arr.reduce((count, item) => {
            return count += item
        }, 0);
        this.setState({total})
    };

    _delete = (id) => {
        const { delete_product } = this.props;
        delete_product(id);
    }
}
function mapStateTopProps(state) {
    return {
        arrCartd: state
    }
}
export default connect(mapStateTopProps, { Quantity, delete_product })(CartView)

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#55B97F',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
