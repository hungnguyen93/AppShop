
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  StatusBar
} from 'react-native';
import RootStack from './src/Navigations/StackNavigator';
StatusBar.setHidden(true);
import { Provider } from 'react-redux';
import store from './src/redux/index';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
