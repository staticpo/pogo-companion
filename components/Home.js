import React, { Component } from 'react';
import { View } from 'react-native';
import Welcome from './Welcome';
import MainButtons from './MainButtons';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <View>
        <Welcome />
        <MainButtons />
      </View>
    );
  }
}

export default Home;
