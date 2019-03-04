import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Home from './components/Home';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 20,
  },
});


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyvar: 'dummy',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Home />
        </ScrollView>
        <View>
          <Footer />
        </View>

      </View>
    );
  }
}

module.exports = App;
