import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const classesInfoApi = createApi({
  reducerPath: 'ClassesInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: `./fakeApi/classesInfo.json` }),
  endpoints: (build) => ({
    getClassesInfo: build.query<unknown, void>({
      query: () => ({
        url: ``,
      }),
    }),
  }),
});

export const { useGetClassesInfoQuery } = classesInfoApi;
