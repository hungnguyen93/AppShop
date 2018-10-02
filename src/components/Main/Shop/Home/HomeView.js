import React, { Component } from 'react';
import { 
     ScrollView, View, Text, TouchableOpacity
 } from 'react-native';
 import getList from '../../../../api/getList';
 import Collection from './Collection';
 import Category from './Category';
 import TopProduct from './TopProduct';
class HomeView extends Component {
    constructor(props){
        super(props);
        this.state = {
            types:[],
            product:[]
        }
    };
    componentDidMount() {
        getList()
        .then(resJSON => {
            const {type,product} = resJSON;
            this.setState({
                types: type,
                product
            });
        })
        .catch(error => console.log(error))
    }
    render() {
        const {types, product}= this.state;
        return (
            <ScrollView style={{backgroundColor:'#D8D9D5', flex:1}}>
                <Collection />
                <Category gotoListProduc={this.props.navigation} types={types}/>
                <TopProduct gotoProductDetail={this.props.navigation} product={product} />
            </ScrollView>
        );
    }
    
}
export default HomeView;