import React, { useState } from 'react';
import { Button, Text } from 'react-native';

const axios = require('axios');

const searchField = () => {
  const [statePkmn, setStatePkmn] = useState({
    pokemon: '',
  });

  const searchHandler = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
        console.log(response.data.name);
        return response;
      })
      .then(response => setStatePkmn({ pokemon: response.data.name }));
  };

  return (
    <div className="footer">
      <Text>{ statePkmn.pokemon }</Text>
      <Button title="This is the title" className="button" onClick={searchHandler} onPress={searchHandler} />
    </div>
  );
};

module.exports = searchField;
