import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, postRequest} from '../../api/verbs';
import {LOGIN_URL, USER_URL} from '../../api/urls';
import {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GetUserInfoParams, LoginParams, LoginResponse, User } from '../../modals/auth/interface';

export const loginUser = createAsyncThunk<LoginResponse, LoginParams>(
  'auth/loginUser',
  async (params: LoginParams) => {
    const response: AxiosResponse<LoginResponse> = await postRequest(
      LOGIN_URL,
      params,
    );
    await AsyncStorage.setItem('token', response.data.token); // to keep token in local storage
    // console.log(JSON.stringify(response.data, null, 3));
    return response.data;
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
      await AsyncStorage.removeItem('token');
      return true;
    }

);

export const getUserInfo = createAsyncThunk<User, GetUserInfoParams>(
  'auth/getUserInfo',
  async (params) => {
      const response: AxiosResponse<User> = await getRequest(
        `${USER_URL}/${params.userId}`,
      );
      // console.log('getUserInfo => ', response.data);
      return response.data;
    }
);