import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice';
import authReducer from './slices/authSlice';
import notificationReducer from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    productsState: productReducer,
    categoriesState: categoryReducer,
    cartState: cartReducer,
    favoriteState: favoritesReducer,
    authState: authReducer,
    notificationState: notificationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
