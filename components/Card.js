import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Description from './Description';
import CircularImage from './CircularImage';
import Footer from './Footer';

export default class Card extends Component {
  render() {
    const { myData } = this.props;
    return(
      <View style={styles.card}>
        <CircularImage myImage={myData.myImage} />
        <Description name={myData.name} job={myData.job} />
        <Footer experience={myData.experience} rate={myData.rate} function={myData.function} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 card: {
    justifyContent: 'space-between',
    backgroundColor: '#F0F7F6',
    alignItems: 'center',
    width: '100%',
    height: 330,
    margin: 10
  },
})