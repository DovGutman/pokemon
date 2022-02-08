import API from '../../api/api';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Item, Icon, Label } from 'semantic-ui-react';
import { AddFavorite, RemoveFavorite } from '../../redux/favorite/favorite.actions';
import './pokemon-item.component.style.scss';
import { SelectPokemon } from '../../redux/pokemon/pokemon.action';

const PokemonItem = (props) => {
  const [pokemon, setPokemon] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [canFavorite, setCanFavorite] = useState(true);

  useEffect(() => {
    API.get(`/pokemon/${props.pokemon.name}/`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.pokemon]);

  useEffect(() => {
    const isFavorite = props.favorite && props.favorite.some((p) => p?.id === pokemon?.id);
    setIsFavorite(isFavorite);
    // if (!isFavorite && props.clearData) props.selectePokemon();

    setCanFavorite(isFavorite || props.favorite.length < 6);
  }, [pokemon, props]);

  const onFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      props.removeFavorite(pokemon);
      props.selectePokemon({});
    } else props.addFavorite(pokemon);
  };

  return (
    <Item onClick={() => props.selectePokemon(pokemon)}>
      <Item.Content>
        <Item.Header>
          <Label horizontal className='name' size='huge' color='violet'>
            {pokemon && pokemon.name}
          </Label>

          <Icon name='favorite' color={isFavorite ? 'yellow' : null} disabled={!canFavorite} onClick={onFavoriteClick} />
          <br />
          <br />

          {pokemon && <Item.Image size='small' src={pokemon.sprites.other.dream_world.front_default} />}
        </Item.Header>
      </Item.Content>
    </Item>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (favorite) => {
    dispatch(AddFavorite(favorite));
  },
  removeFavorite: (favorite) => {
    dispatch(RemoveFavorite(favorite));
  },
  selectePokemon: (pokemon) => {
    dispatch(SelectPokemon(pokemon));
  },
});

const mapStateToProps = ({ favorite }) => ({
  favorite,
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem);
