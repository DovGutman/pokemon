import API from '../../api/api';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import PokemonsList from '../../components/pokemon-list/pokemons-list.component';
import PokemonCard from '../../components/pokemon-card/pokemon-card.component';

const PokemonPage = ({ isFavoritePage, favorite }) => {
  const [pokemons, setPokemons] = useState(isFavoritePage ? favorite : []);

  useEffect(() => {
    if (isFavoritePage) return;

    API.get('/pokemon?limit=151')
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isFavoritePage]);

  useEffect(() => {
    if (!isFavoritePage) return;

    setPokemons(favorite);
  }, [favorite, isFavoritePage]);

  return (
    <div className='screen'>
      <div>
        <div className='pokemon-list'>
          <PokemonsList list={pokemons} />
        </div>
      </div>
      <div>
        <div className='pokemon-card'>
          <PokemonCard />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ favorite }) => ({
  favorite,
});

export default connect(mapStateToProps)(PokemonPage);
