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
            {this.props.experience}
          </Text>
        </View>
        <View>
          <Text>
            Rate
          </Text>
          <Text>
            {this.props.rate}
          </Text>
        </View>
        <View>
          <Text>
            Function
          </Text>
          <Text>
            {this.props.function}
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