import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchButton from './Buttons/SearchButton';

const styles = StyleSheet.create({
  MainButtonsContainer: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  MainButton: {

  },
});

// eslint-disable-next-line react/prefer-stateless-function
class MainButtons extends Component {
  render() {
    return (
      <View style={styles.MainButtonsContainer}>
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
        <SearchButton style={styles.MainButton} />
      </View>
    );
  }
}

export default MainButtons;
