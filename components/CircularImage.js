import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class CircularImage extends Component {
  render() {
    return(
        <Image 
          source={{uri: this.props.myImage}} style={styles.container}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    marginTop: 30,
    borderRadius: 75,
    resizeMode: 'contain',
    backgroundColor: 'grey',
  }
})