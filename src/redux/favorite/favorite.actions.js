import { FavoriteActionTypes } from './favorite.types';

export const AddFavorite = (favorite) => ({
  type: FavoriteActionTypes.ADD_FAVORITE,
  payload: favorite,
});

export const RemoveFavorite = (favorite) => ({
  type: FavoriteActionTypes.REMOVE_FAVORITE,
  payload: favorite,
});
