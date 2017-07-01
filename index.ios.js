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
  View,
  ScrollView
} from 'react-native';

import Card from './components/Card';
import myImage from './img/image.jpg';

const myData = [
  {
    name: 'Subhechchha Joshi',
    job: 'Mobile Application Developer',
    experience: '1 year',
    rate: '$400',
    function: 'Developer',
    myImage: myImage
  },
  {
    name: 'Aakash Sigdel',
    job: 'Mobile Application Developer',
    experience: '3 years',
    rate: '$4000',
    function: 'Developer',
    myImage: myImage
  },
  {
    name: 'blabla Joshi',
    job: 'Mobile Application Developer',
    experience: '1 year',
    rate: '$400',
    function: 'Developer',
    myImage: myImage
  }
]

export default class AwesomeProject extends Component {
  render() {
    return (
      <ScrollView contentContainerstyle={styles.contentContainer}>
        {myData.map( (item,index) =>
          <Card key={index} myData={item} />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#39455D',
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
