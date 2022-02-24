export const API_TOKEN_URL = `https://eu.battle.net/oauth/token`;
export const API_BLIZZARD = `https://eu.api.blizzard.com`;

export const PAGES = [
  {
    name: 'Game',
    nested: [
      {
        name: 'CLasses',
        path: '/cLasses',
      },
      {
        name: 'Professions',
        path: '/professions',
      },
      {
        name: 'Races',
        path: '/races',
      },
      {
        name: 'Specializations',
        path: '/specializations',
      },
    ],
  },
  {
    name: 'Database',
    nested: [
      {
        name: 'Achievements',
        path: '/achievements',
      },
      {
        name: 'Creatures',
        path: '/creatures',
      },
      {
        name: 'Items',
        path: '/items',
      },
      {
        name: 'Mounts',
        path: '/mounts',
      },
    ],
  },
  {
    name: 'Auction',
    path: '/Auction',
  },
  {
    name: 'Competitive',
    path: '/Competitive',
  },
];
