import { Item } from 'semantic-ui-react';
import PokemonItem from '../pokemon-item/pokemon-item.component';
import { connect } from 'react-redux';
import { SelectPokemon } from '../../redux/pokemon/pokemon.action';

const PokemonsList = (props) => {
  return (
    <Item.Group divided link>
      {props.list.map((pokemon) => (
        <PokemonItem pokemon={pokemon} key={pokemon.name} />
      ))}
    </Item.Group>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectePokemon: (pokemon) => {
    dispatch(SelectPokemon(pokemon));
  },
});

const mapStateToProps = ({ pokemon }) => ({
  selectedPokemon: pokemon,
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
