/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Image,
} from 'react-native';
import propTypes from 'prop-types';
import POKETYPES from '../config/constants';


const getImgSrcByType = (type) => {
  switch (type) {
    case POKETYPES.NORMAL:
      return require('../assets/images/types/normal.png');
    case POKETYPES.FIGHTING:
      return require('../assets/images/types/fighting.png');
    case POKETYPES.FLYING:
      return require('../assets/images/types/flying.png');
    case POKETYPES.POISON:
      return require('../assets/images/types/poison.png');
    case POKETYPES.GROUND:
      return require('../assets/images/types/ground.png');
    case POKETYPES.ROCK:
      return require('../assets/images/types/rock.png');
    case POKETYPES.BUG:
      return require('../assets/images/types/bug.png');
    case POKETYPES.GHOST:
      return require('../assets/images/types/ghost.png');
    case POKETYPES.STEEL:
      return require('../assets/images/types/steel.png');
    case POKETYPES.FIRE:
      return require('../assets/images/types/fire.png');
    case POKETYPES.GRASS:
      return require('../assets/images/types/grass.png');
    case POKETYPES.WATER:
      return require('../assets/images/types/water.png');
    case POKETYPES.ELECTRIC:
      return require('../assets/images/types/electric.png');
    case POKETYPES.PSYCHIC:
      return require('../assets/images/types/psychic.png');
    case POKETYPES.ICE:
      return require('../assets/images/types/ice.png');
    case POKETYPES.DRAGON:
      return require('../assets/images/types/dragon.png');
    case POKETYPES.DARK:
      return require('../assets/images/types/normal.png');
    case POKETYPES.FAIRY:
      return require('../assets/images/types/fairy.png');
    default:
      return require('../assets/images/types/normal.png');
  }
};

class InfoPage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { types } = this.props;

    return (
      <View>
        {

          types.map((type, i) => {
            return (
              <Image
                key={i}
                style={{ width: 20, height: 20 }}
                source={getImgSrcByType(type)}
              />
            );
          })
        }
      </View>
    );
  }
}

InfoPage.propTypes = {
  types: propTypes.arrayOf(propTypes.string).isRequired,
};

export default InfoPage;
