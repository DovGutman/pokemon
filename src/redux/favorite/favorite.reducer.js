import { FavoriteActionTypes } from './favorite.types';

const INITIAL_STATE = [];

const favoriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoriteActionTypes.REMOVE_FAVORITE:
      return state.filter((p) => action.payload.id !== p.id);
    case FavoriteActionTypes.ADD_FAVORITE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default favoriteReducer;
