/* eslint-disable global-require */
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

const getSectionsData = (key) => {
  const sectionsData = {
    page: key,
    icon: '',
  };

  switch (key) {
    case 'Credits':
      sectionsData.icon = require('../../assets/credits.png');
      break;
    case 'Search':
      sectionsData.icon = require('../../assets/search.png');
      break;
    case 'Tasks':
      sectionsData.icon = require('../../assets/tasks.png');
      break;
    default:
      break;
  }

  return sectionsData;
};

// eslint-disable-next-line react/prefer-stateless-function
class GridButton extends Component {
  constructor(...args) {
    super(...args);
    this.page = this.props.page;
    this.searchButtonHandler = this.searchButtonHandler.bind(this, this.page);
  }

  searchButtonHandler(page) {
    this.props.navigation.navigate(page);
  }

  render() {
    const sectionsData = getSectionsData(this.page);

    return (
      <TouchableOpacity style={styles.MainButton} onPress={this.searchButtonHandler}>
        <Image style={styles.Image} source={sectionsData.icon} />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(GridButton);
