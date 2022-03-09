export type Cards = {
  data: CardData[];
  dir: string;
};

interface CardData {
  title: string;
  text: string;
  img: string;
}

export interface CardDataExtended extends CardData {
  dir: string;
}
