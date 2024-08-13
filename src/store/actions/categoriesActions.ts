import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../api/verbs';
import {CATEGORIES_URL} from '../../api/urls';
import {AxiosResponse} from 'axios';

export const getCategories = createAsyncThunk<string[], void>(
  'categories/getCategories',
  async () => {
    const response: AxiosResponse<string[]> = await getRequest(
      CATEGORIES_URL,
      {},
    );
    return response.data;
  },
);
