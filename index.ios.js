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

const myData = [
  {
    name: 'Subhechchha Joshi',
    job: 'Mobile Application Developer',
    experience: '1 year',
    rate: '$400',
    function: 'Developer',
    myImage: 'https://i1.wp.com/georgehahn.com/wp-content/uploads/2015/12/Podcast_2015_image.jpg?resize=400%2C400&ssl=1'
  },
  {
    name: 'Aakash Sigdel',
    job: 'Mobile Application Developer',
    experience: '3 years',
    rate: '$4000',
    function: 'Developer',
    myImage: 'http://1.bp.blogspot.com/-tn6C_DQZQAk/VY5BVbZm24I/AAAAAAAAE6o/k3PehPBlxJg/s1600/Gil-Scott-Heron-Pieces-of-a-Man.jpg'
  },
  {
    name: 'blabla Joshi',
    job: 'Mobile Application Developer',
    experience: '1 year',
    rate: '$400',
    function: 'Developer',
    myImage: 'https://pbs.twimg.com/profile_images/836394165630042113/61nRsNFN.jpg'
  }
]

export default class AwesomeProject extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
        {myData.map( (item,index) =>
          <Card key={index} myData={item} />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30 
  },
  container: {
    backgroundColor: '#39455D', 
    paddingTop: 20,  
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
