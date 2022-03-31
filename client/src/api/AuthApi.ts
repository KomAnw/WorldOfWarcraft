import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_TOKEN_URL } from 'constants/index';

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET || '';
const ClIENT_ID = process.env.REACT_APP_CLIENT_ID || '';
const formData = new URLSearchParams();
formData.append('grant_type', 'client_credentials');
formData.append('client_id', ClIENT_ID);
formData.append('client_secret', CLIENT_SECRET);

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_TOKEN_URL }),
  endpoints: (build) => ({
    getAccessToken: build.query<string, void>({
      query: () => ({ url: '', method: 'POST', body: formData }),
      transformResponse: (result: { access_token: string }) =>
        result.access_token,
    }),
  }),
});

export const { useGetAccessTokenQuery } = authApi;
