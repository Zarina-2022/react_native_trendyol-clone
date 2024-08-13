import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, updateRequest, } from '../../api/verbs';
import {AxiosResponse} from 'axios';
import {CART_URL, UPDATE_CART_URL} from '../../api/urls';
import {AddToCartParams, Cart, ProductsRequestParams} from '../../modals/store/interface';

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (params: ProductsRequestParams) => {
    const response: AxiosResponse<any> = await getRequest(
      `${CART_URL}/${params.userId}`,
      params,
    );
  
    return response.data;
  },
);

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async (params: AddToCartParams) => {
    const response: AxiosResponse<any> = await updateRequest(
      `${UPDATE_CART_URL}/${params.userId}`,
      params,
    );
    return response.data;
  },
);
