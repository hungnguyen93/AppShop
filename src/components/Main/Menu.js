import React, { Component } from 'react';
import {
    View, StyleSheet,
    Image
} from 'react-native';
import ButtonSignIn from '../../Button/ButtonSignIn';
import ButtonSignOut from '../../Button/ButtonSignOut';
import icProfile from '../../media/temp/profile.png';
import { width, height } from 'react-native-dimension';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: false,
        }
    }
    render() {
        const { container, image } = styles;
        const main = this.state.isLogedIn
            ?
            <ButtonSignOut
                ChangeInfo={this.gotoChangerInfo}
                OrderHistory={this.gotoOrderHistory}
                Authentication={this.gotoAunthentication}

            />
            :
            <ButtonSignIn navigation={this.props.navigation} />
        return (
            <View style={container}>
                <Image source={icProfile} style={image} />
                {main}
            </View>
        );
    }
    gotoAunthentication = () => {
        const {navigate} = this.props.navigation;
        navigate('Authentication')
      //  this.props.navigation.navigate('Aunthentication');
    };
    gotoChangerInfo = () => {
        const { navigate } = this.props.navigation;
        navigate('ChangeInfo')
    };
    gotoOrderHistory=()=> {
        const { navigate } = this.props.navigation;
        navigate('OrderHistory')
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#55B97F', flex: 1,
        borderRightWidth: width(1),
        borderColor: 'white',
        alignItems: 'center'
    },
    image: {
        height: height(18),
        width: width(33),
        borderRadius: height(9),
        marginTop: height(3)

    }
});
export default Menu;