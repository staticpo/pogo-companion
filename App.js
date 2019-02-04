import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      pokemon: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => { 
      console.log(response.data.name);
      return response;
    })
    .then(response => this.setState({pokemon: response.data.name}))
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.pokemon}</Text>
        <Button title="This is the title" className='button' onClick={this.handleClick} onPress={this.handleClick}></Button>
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
