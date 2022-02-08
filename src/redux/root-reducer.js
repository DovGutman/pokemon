import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoriteReducer from './favorite/favorite.reducer';
import pokemonReducer from './pokemon/pokemon.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'], // reducers that save in localStorage
};

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  pokemon: pokemonReducer,
});

export default persistReducer(persistConfig, rootReducer);
