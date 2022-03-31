import { MotionStyle } from 'framer-motion';
import { Classes } from 'api/ClassesApi';

export type CardListData = {
  data?: CardData[];
  fetchedData?: Classes[];
};

interface CardData {
  title: string;
  text: string;
  img: string;
}

export interface CardDataExtended extends CardData {
  index: number;
}

export type MotionProps = {
  as?: any;
  animate?: MotionStyle;
  initial?: MotionStyle;
  transition?: any;
};
