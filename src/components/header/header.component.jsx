import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, hidden }) => (
  <div className='header-pokemon'>
    <div className='options'>
      <Link className='option' to='/'>
        POKEMONS
      </Link>
      <Link className='option' to='/favorites'>
        FAVORITES
      </Link>
    </div>
  </div>
);

export default Header;
