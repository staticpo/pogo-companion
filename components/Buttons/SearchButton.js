import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

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
  searchButtonHandler() {
    this.props.navigation.navigate('Credits');
  }

  render() {
    return (
      <TouchableOpacity style={styles.MainButton} onPress={this.searchButtonHandler.bind(this)}>
        <Image style={styles.Image} source={require('../../assets/search.png')} />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(SearchButton);
