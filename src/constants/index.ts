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

export const backgroundText = {
  home: 'Learn more about the World of Warcraft universe',
};

export const PreviewCardsData = {
  home: [
    {
      title: 'Races',
      img: 'races.jpg',
      text: 'Learn more about what races are in WoW',
    },
    {
      title: 'Classes',
      img: 'classes.jpg',
      text: 'Learn more about what classes are in WoW',
    },
    {
      title: 'Professions',
      img: 'professions.jpg',
      text: 'Learn more about what professions are in WoW',
    },
    {
      title: 'Competitive',
      img: 'competitive.jpg',
      text: 'Check out the latest roundup of competitive modes',
    },
  ],
};
