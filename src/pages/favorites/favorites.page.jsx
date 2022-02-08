import PokemonPage from '../pokemon/pokemon.page';
import { connect } from 'react-redux';
import { SelectPokemon } from '../../redux/pokemon/pokemon.action';
import { useEffect } from 'react';

const Favorites = ({ selectePokemon }) => {
  useEffect(() => {
    selectePokemon({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PokemonPage isFavoritePage />;
};

const mapDispatchToProps = (dispatch) => ({
  selectePokemon: (pokemon) => {
    dispatch(SelectPokemon(pokemon));
  },
});

export default connect(null, mapDispatchToProps)(Favorites);
