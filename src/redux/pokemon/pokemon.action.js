import { PokemonActionTypes } from './pokemon.types';

export const SelectPokemon = (pokemon) => ({
  type: PokemonActionTypes.SELECT_POKEMON,
  payload: pokemon,
});
