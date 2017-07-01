import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Description extends Component {
  render() {
    return(
      <View style={styles.descriptionContainer}>
        <Text style={[styles.name, styles.textColor]}>Subhechchha Joshi</Text>
        <Text style={[styles.textColor, styles.job]}>Mobile Application Developer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionContainer: {
    
  },

  name: {
    fontSize: 20,
  },

  job: {
    fontSize: 10,
  },

  textColor: {
    color: '#11315B',
    textAlign: 'center'
  }

});