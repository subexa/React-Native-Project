import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class Footer extends Component {
  render() {
    return(
      <View style={styles.footerContainer}>
        <View>
          <Text>
            Experience
          </Text>
          <Text>
            1years
          </Text>
        </View>
        <View>
          <Text>
            Rate
          </Text>
          <Text>
            63%
          </Text>
        </View>
        <View>
          <Text>
            Function
          </Text>
          <Text>
            Director
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#DBE1EC',
    height: 70
  }
})