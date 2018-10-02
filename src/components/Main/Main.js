import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };
    render() {
        return (
            <Drawer
                tapToClose={true}
                openDrawerOffset={0.5}
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigation={this.props.navigation} />}
            >
                <Shop open={this.openControlPanel} />
            </Drawer>
        );
    }
    gotoAunthentication() {
        // const {navigate} = this.props.navigation;
        // navigate('Authentication')
        navigate('Authentication');
    }

    gotoChangerInfo() {
        navigate('ChangeInfo')
    }

    gotoOrderHistory() {
        this.props.navigation.navigate('OrderHistory')
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
})