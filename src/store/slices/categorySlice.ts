import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CategoryState} from '../../modals/store/interface';
import {getCategories} from '../actions/categoriesActions';

const initialState: CategoryState = {
  categories: [],
  selectedCategory: 'electronics',
  pending: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.categories = action.payload;
          state.pending = false;
        },
      )
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetch categories';
      });
  },
});

export const {selectCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
