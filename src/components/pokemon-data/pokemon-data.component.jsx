import { List, Label } from 'semantic-ui-react';
import './pokemon-data.component.style.scss';

const PokemonData = ({ name, color, values }) => {
  return (
    <div>
      <Label horizontal className='pokemon-lable' size='big' color={color}>
        {name}:
      </Label>
      <div className='pokemon-moves'>
        <List horizontal>
          {values &&
            values.map((value) => (
              <Label horizontal key={value} className='pokemon-moves-lable' size='large'>
                {value}
              </Label>
            ))}
        </List>
      </div>
    </div>
  );
};

export default PokemonData;
