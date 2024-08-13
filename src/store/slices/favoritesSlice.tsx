import {createSlice} from '@reduxjs/toolkit';
import {FavoriteState} from '../../modals/store/interface';

const initialState: FavoriteState = {
  favorites: [],
  pending: false,
  error: null,
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(fav => fav.id === action.payload.id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const {toggleFavorite} = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
