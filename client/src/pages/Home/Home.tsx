import React from 'react';
import VideoBackground from 'components/VideoBackground';
import Ragnaros from 'assets/Home/Ragnaros.mp4';
import { PreviewCardsData } from 'constants/index';
import { videoBackgroundText } from 'constants/index';
import CardList from 'components/CardList';

export const Home = () => {
  return (
    <div>
      <VideoBackground video={Ragnaros} text={videoBackgroundText.home} />
      <CardList data={PreviewCardsData.home} />
    </div>
  );
};
