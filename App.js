import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const SearchField = require('./app/components/searchField');
const Footer = require('./app/components/footer');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <SearchField />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
