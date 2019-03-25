import React, { Component } from 'react';
import {
  Text, View, Image,
} from 'react-native';
import propTypes from 'prop-types';
import Poketypes from './PokeTypes';


class InfoPage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { pokemon } = this.props;
    let imageURL = '';
    if (pokemon.imageURL !== '') {
      imageURL = pokemon.imageURL;
    }

    return (
      <View>
        <Text>{ pokemon.name }</Text>
        <Poketypes types={pokemon.types} />
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: imageURL }}
        />
      </View>
    );
  }
}

InfoPage.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string,
    imageURL: propTypes.string,
  }).isRequired,
};

export default InfoPage;
