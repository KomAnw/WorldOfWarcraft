import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_TOKEN_URL } from 'constants/index.ts';

export const getApiToken = createAsyncThunk(
  'token/getToken',
  async (thunkAPI) => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', '0b27257c45fc488dbcbd816de5614f63');
    params.append('client_secret', 'RB0jrwp8J4jH075VRZEAOkyHmtRhsrlV');

    try {
      const token = await axios.post(API_TOKEN_URL, params);
      return token.data;
    } catch (error) {
      console.log(error);
    }
  }
);
