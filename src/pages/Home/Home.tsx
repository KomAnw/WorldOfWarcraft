import React from 'react';
import VideoBackground from 'components/VideoBackground/VideoBackground';
import Ragnaros from 'assets/Home/Ragnaros.mp4';

export const Home = () => {
  return (
    <div>
      <VideoBackground video={Ragnaros} />
    </div>
  );
};
