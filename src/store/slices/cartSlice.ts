import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  Cart,
  CartProps,
  CartState,
  Product,
} from '../../modals/store/interface';
import {getCart, updateCart} from '../actions/cartActions';

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  pending: false,
  error: null,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    updateTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.productId !== action.payload);
    },

  },
  extraReducers: builder => {
    builder
      .addCase(getCart.pending, state => {
        state.pending = true;
      })
      .addCase(getCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.cart = action.payload;
        state.pending = false;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetch cart';
        state.pending = false;
      })
      .addCase(updateCart.pending, state => {
        state.pending = true;
      })
      .addCase(updateCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.cart.push(action.payload);
        state.pending = false;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to update cart';
        state.pending = false;
      });
  },
});
export const {setTotalPrice, updateTotalPrice, deleteCartItem} =
  CartSlice.actions;
export default CartSlice.reducer;
