import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainButton: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginTop: 20,
  },
  Image: {
    width: 50,
    height: 50,
    marginTop: 25,
    marginLeft: 25,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class SearchButton extends Component {
  render() {
    return (
      <View style={styles.MainButton}>
        <Image style={styles.Image} source={require('../../assets/search.png')} />
      </View>
    );
  }
}

export default SearchButton;
