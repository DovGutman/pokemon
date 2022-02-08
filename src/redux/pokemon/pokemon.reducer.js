import { PokemonActionTypes } from './pokemon.types';

const INITIAL_STATE = {};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonActionTypes.SELECT_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
