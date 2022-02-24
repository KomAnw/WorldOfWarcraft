import { createSlice } from '@reduxjs/toolkit';
import { getApiToken } from '../commonThunk/apiThunk';

const initialState = {
  token: '',
  token_type: '',
};

const getApiTokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: {
    [getApiToken.fulfilled]: (state, { payload }) => {
      state.token = payload.access_token;
      state.token_type = payload.token_type;
    },
  },
});

export const tokenReducer = getApiTokenSlice.reducer;
