import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import Credits from './components/Credits';
import Search from './components/Search';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 20,
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Pogo Companion',
  };

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

class CreditsScreen extends React.Component {
  static navigationOptions = {
    title: 'Credits',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Credits />
        </ScrollView>
        <View>
          <Footer />
        </View>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Search />
        </ScrollView>
        <View>
          <Footer />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Credits: CreditsScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
