import { API_BLIZZARD } from '../constants/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Classes = {
  id: number;
  key: { href: string };
  name: string;
};

type responseClass = {
  gender_name: {
    female: string;
    male: string;
  };
  id: number;
  name: string;
  power_type: {
    id: 1;
    key: { href: string };
    name: string;
  };
  pvp_talent_slots: {
    href: string;
  };
  specializations: Specialization[];
  _links: {
    self: { href: string };
  };
};

type Specialization = {
  id: number;
  key: { href: string };
  name: string;
};

export const classesApi = createApi({
  reducerPath: 'classesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BLIZZARD }),
  endpoints: (build) => ({
    getClasses: build.query<Classes[], void>({
      query: () => ({
        url: `data/wow/playable-class/index?namespace=static-eu&locale=en_US&access_token=${window.sessionStorage.token}`,
      }),
      transformResponse: (result: { classes: Classes[] }) => result.classes,
    }),
    getClass: build.query<responseClass, number>({
      query: (id) => ({
        url: `data/wow/playable-class/${id}?namespace=static-eu&locale=en_US&access_token=${window.sessionStorage.token}`,
      }),
    }),
  }),
});

export const { useGetClassesQuery, useGetClassQuery } = classesApi;
