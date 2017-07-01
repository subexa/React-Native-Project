/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Description from './components/Description';
import CircularImage from './components/CircularImage';
import Footer from './components/Footer';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <CircularImage />
          <Description />
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39455D',
  },
  card: {
    justifyContent: 'space-between',
    backgroundColor: '#F0F7F6',
    alignItems: 'center',
    width: 300,
    height: 330
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
