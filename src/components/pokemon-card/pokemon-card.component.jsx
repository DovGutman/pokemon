import API from '../../api/api';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './pokemon-card.component.style.scss';
import PokemonData from '../pokemon-data/pokemon-data.component';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const [areas, setAreas] = useState();
  const [evolvesTo, setEvolvesTo] = useState([]);
  const [evolvesFrom, setEvolvesFrom] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    if (!pokemon || !pokemon.id || isPageLoading) {
      setIsPageLoading(false);
      setEvolvesTo([]);
      setEvolvesFrom([]);
      setAreas();
      return;
    }

    API.get(`/pokemon-species/${pokemon.id}/`)
      .then((res) => {
        searchEvolvesTo(res.data.evolution_chain);
        setAreas(res.data.pal_park_encounters);
        setEvolvesFrom(res.data.evolves_from_species ? [res.data.evolves_from_species.name] : []);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon, pokemon.id]);

  const searchEvolvesTo = (evolution_chain) => {
    API({ url: '', baseURL: evolution_chain.url })
      .then((res) => {
        const evolves_to = [];
        const current = findCurrentEvolve(res.data.chain);

        for (let i = 0; i < current.evolves_to.length; i++) {
          const element = current.evolves_to[i];
          evolves_to.push(element.species.name);
        }

        console.log(evolves_to);
        setEvolvesTo(evolves_to);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findCurrentEvolve = (evolves_to) => {
    if (evolves_to.species.name === pokemon.name) return evolves_to;
    if (evolves_to.evolves_to.length === 0) return;

    for (let i = 0; i < evolves_to.evolves_to.length; i++) {
      return findCurrentEvolve(evolves_to.evolves_to[i]);
    }
  };

  return (
    <div>
      <Card className='pokemon-card-content' fluid>
        <Card.Content>
          <PokemonData name='Types' color='teal' values={pokemon && pokemon.types && pokemon.types.map((t) => t.type.name)} />

          <PokemonData name='Moves' color='olive' values={pokemon && pokemon.moves && pokemon.moves.map((m) => m.move.name)} />
          <br />
          <PokemonData name='Encounters' color='brown' values={areas && areas.map((t) => t.area.name)} />
          <PokemonData name='Evolves To' color='orange' values={evolvesTo} />
          <PokemonData name='Evolves From' color='yellow' values={evolvesFrom} />
          <PokemonData
            name='Games'
            color='blue'
            values={pokemon && pokemon.types && pokemon.game_indices.map((g) => g.version.name)}
          />
        </Card.Content>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon,
});

export default connect(mapStateToProps)(PokemonCard);
