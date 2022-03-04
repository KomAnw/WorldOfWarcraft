import React from 'react';
import WoWLogo from 'assets/Home/WorldofWarcraftlogo.png';
import { Container, Video, Image } from './styles';

const VideoBackground = ({ video }) => {
  return (
    <Container>
      <Image src={WoWLogo} alt="" />
      <Video src={video} autoPlay loop muted preload="auto" />
    </Container>
  );
};

export default VideoBackground;
