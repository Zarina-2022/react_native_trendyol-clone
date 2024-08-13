import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getBestsellersProducts,
  getNewArrivalProducts,
  getProducts,
  getSingleProduct,
} from '../actions/productsActions';
import {Product, ProductState} from '../../modals/store/interface';
import {toggleFavorite} from '../../utils/functions';

const initialState: ProductState = {
  products: [],
  newArrival: [],
  bestsellers: [],
  singleProduct: {},
  pending: false,
  error: null,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavoriteInProducts: (state, action) => {
      toggleFavorite(state.products, action.payload.id);
    },
    toggleFavoriteInNewArrivals: (state, action) => {
      toggleFavorite(state.newArrival, action.payload.id);
    },
    toggleFavoriteInBestsellers: (state, action) => {
      toggleFavorite(state.bestsellers, action.payload.id);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.products = action.payload;
        state.pending = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetch products';
        state.pending = false;
      })

      .addCase(getNewArrivalProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getNewArrivalProducts.fulfilled,(state, action: PayloadAction<any[]>) => {
          state.newArrival = action.payload;
          state.pending = false;
        },
      )
      .addCase(getNewArrivalProducts.rejected, (state, action) => {
        state.error =
          action.error.message ?? 'Failed to fetch new arrival products';
        state.pending = false;
      })

      .addCase(getBestsellersProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getBestsellersProducts.fulfilled,(state, action: PayloadAction<any[]>) => {
          state.bestsellers = action.payload;
          state.pending = false;
        },
      )
      .addCase(getBestsellersProducts.rejected, (state, action) => {
        state.error =
          action.error.message ?? 'Failed to fetch bestsellers products';
        state.pending = false;
      })
      .addCase(getSingleProduct.pending, state => {
        state.pending = true;
      })
      .addCase(getSingleProduct.fulfilled,(state, action: PayloadAction<any>) => {
          state.singleProduct = action.payload;
          state.pending = false;
        },
      )
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.error =
          action.error.message ?? 'Failed to fetch bestsellers products';
        state.pending = false;
      });
  },
});

export const {
  toggleFavoriteInProducts,
  toggleFavoriteInNewArrivals,
  toggleFavoriteInBestsellers,
} = ProductSlice.actions;
export default ProductSlice.reducer;
