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

export const videoBackgroundText = {
  home: {
    title: 'The Battle for Azeroth has already begun',
    description:
      'Immerse yourself in the wonderful world of magic, battles and crafts. Amazing discoveries and a huge new world await you, learn more about World of Warcraft',
  },
};

export const imageBackgroundText = {
  classes: {
    title: 'Classes',
    text: 'From knights in shiny armor to skulking stalkers and cunning spellcasters, each class in World of Warcraft presents unique challenges and gameplay for you to master. What is your calling?',
  },
  races: {
    title: 'Denizens of Azeroth',
    text: `Azeroth is home to a large variety of races, some native to its lands and some hailing from other realms. Whether as a stalwart defender of the Alliance or a fierce guardian of the Horde, deciding which race to play will define who you'll fight for in this neverending war. Where do your loyalties lie?`,
  },
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
    {
      title: 'Database',
      img: 'Database.jpg',
      text: 'Explore creatures, items, mounts and more',
    },
    {
      title: 'Auction',
      img: 'Auction.jpg',
      text: 'Find out about the latest or interesting lots in the auction house',
    },
  ],
};
