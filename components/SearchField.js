import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';

class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: '',
    };
  }

  searchHandler() {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
        console.log(response.data.name);
        return response;
      })
      .then(response => this.setState({ pokemon: response.data.name }));
  }

  render() {
    const { pokemon } = this.state;
    return (
      <View>
        <Text>{ pokemon }</Text>
        <Button title="This is the title" className="button" onClick={this.searchHandler} onPress={this.searchHandler} />
      </View>
    );
  }
}

export default SearchField;
