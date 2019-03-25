import React, { Component } from 'react';
import {
  Button, Text, View, TextInput,
} from 'react-native';
import axios from 'axios';
import InfoPage from './infoPage';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      pokemonName: '',
      pokemon: {
        name: '',
        types: [],
        imageURL: '',
      },
    };

    this.input = React.createRef();
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler() {
    const { searchTerm } = this.state;
    console.log(searchTerm);

    const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

    axios.get(url)
      .then((response) => {
        // console.log(response.data);
        return response;
      })
      .then((response) => {
        this.setState({ pokemonName: response.data.name });
        return response;
      })
      .then((response) => {
        const poketypes = [];
        response.data.types.forEach((element) => {
          poketypes.push(element.type.name);
        });

        this.setState({
          pokemon: {
            name: response.data.name,
            imageURL: response.data.sprites.front_default,
            types: poketypes,
          },
        });
      });
  }

  render() {
    const { pokemonName, pokemon } = this.state;
    return (
      <View>
        <Text>{ pokemonName }</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ searchTerm: text })}
          ref={this.input}
        />
        <Button title="Search" className="button" onClick={this.searchHandler} onPress={this.searchHandler} />

        { pokemon.name !== '' ? <InfoPage pokemon={pokemon} /> : null }
      </View>
    );
  }
}

export default Search;
