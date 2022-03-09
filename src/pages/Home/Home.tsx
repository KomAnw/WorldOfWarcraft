import React from 'react';
import VideoBackground from 'components/VideoBackground';
import Ragnaros from 'assets/Home/Ragnaros.mp4';
import { PreviewCardsData } from 'constants/index';
import { backgroundText } from 'constants/index';
import PreviewCardList from 'components/PreviewCardList';

export const Home = () => {
  return (
    <div>
      <VideoBackground video={Ragnaros} text={backgroundText.home} />
      <PreviewCardList data={PreviewCardsData.home} dir="Home" />
    </div>
  );
};
