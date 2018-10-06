import React, { Component } from 'react';
import {
    View, Image, StyleSheet
} from 'react-native';
import { width, height } from 'react-native-dimension';
import Contact from './Contact/Contact';
import TabNavigator from 'react-native-tab-navigator';
import Header from './Header';
import icHome from '../../../media/appIcon/home.png';
import icHome0 from '../../../media/appIcon/home0.png';
import icCart from '../../../media/appIcon/cart.png';
import icCart0 from '../../../media/appIcon/cart0.png';
import icSearch from '../../../media/appIcon/search.png';
import icSearch0 from '../../../media/appIcon/search0.png';
import icContact from '../../../media/appIcon/contact.png';
import icContact0 from '../../../media/appIcon/contact0.png';
import HomeStack from '../../../Navigations/HomeStack';
import CartStack from '../../../Navigations/CartStack';
import SearchStack from '../../../Navigations/SearchStack';
import getCart from '../../../api/getCart';
import {addProductToCartd} from '../../../redux/actions/addProductToCartd';
import { connect } from 'react-redux';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedTab: "home" ,
            arr:null
        }
    }
    
   componentWillMount() {
       getCart()
       .then(cart => {
        //    cart.map(e => console.log(e));
        
           cart.map(e => this.setState({arr:e},()=>this.props.addProductToCartd(this.state.arr)))
        })
        
   }

    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { selectedTab } = this.state;
        const {arrCart} = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={icHome0} style={style.icon} />}
                        renderSelectedIcon={() => <Image source={icHome} style={style.icon} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        selectedTitleStyle={{color:'#55B97F' , fontFamily:'Avenir'}}
                    >
                        <HomeStack />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={icCart0} style={style.icon} />}
                        renderSelectedIcon={() => <Image source={icCart} style={style.icon} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        selectedTitleStyle={{color:'#55B97F' , fontFamily:'Avenir'}}
                        badgeText={arrCart.length}
                        >
                        <CartStack />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={icSearch0} style={style.icon} />}
                        renderSelectedIcon={() => <Image source={icSearch} style={style.icon} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        selectedTitleStyle={{color:'#55B97F' , fontFamily:'Avenir'}}
                        >
                        <SearchStack />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={icContact0} style={style.icon} />}
                        renderSelectedIcon={() => <Image source={icContact} style={style.icon} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        selectedTitleStyle={{color:'#55B97F' , fontFamily:'Avenir'}}
                        >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
function mapStateTopProps(state) {
    return {
        arrCart: state
    }
}
export default connect (mapStateTopProps,{addProductToCartd})(Shop)
const style = StyleSheet.create({
    icon: {
        height: height(3.7), width: width(6),
    }
})