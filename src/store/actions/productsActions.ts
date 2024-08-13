import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../api/verbs';
import {
  BESTSELLER_PRODUCTS_URL,
  CATEGORY_URL,
  NEW_ARRIVAL_PRODUCTS_URL,
  PRODUCTS_URL,
} from '../../api/urls';
import {Product, ProductsRequestParams} from '../../modals/store/interface';
import {AxiosResponse} from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (params: ProductsRequestParams) => {
    const response: AxiosResponse<any> = await getRequest(
      `${CATEGORY_URL}/${params.category}`,
      params,
    );
    return response.data;
  },
);

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (params: ProductsRequestParams) => {
    const response: AxiosResponse<any> = await getRequest(
      `${PRODUCTS_URL}/${params.productId}`,
    );
    return response.data;
  },
);

export const getNewArrivalProducts = createAsyncThunk(
  'products/getNewArrivalProducts',
  async (params: ProductsRequestParams) => {
    const response: AxiosResponse<any> = await getRequest(
      NEW_ARRIVAL_PRODUCTS_URL,
      params,
    );
    return response.data;
  },
);

export const getBestsellersProducts = createAsyncThunk<
  Product[],
  ProductsRequestParams
>('products/getBestsellersProducts', async (params: ProductsRequestParams) => {
  const response: AxiosResponse<any> = await getRequest(
    BESTSELLER_PRODUCTS_URL,
    params,
  );
  return response.data;
});
