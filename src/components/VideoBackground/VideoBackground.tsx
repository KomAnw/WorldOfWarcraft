import React from 'react';
import WoWLogo from 'assets/Home/WorldofWarcraftlogo.png';
import { Container, Video, Image, StyledTypography } from './styles';

const VideoBackground = ({ video, text }) => {
  return (
    <Container>
      <Image src={WoWLogo} alt="" />
      <Video src={video} autoPlay loop muted preload="auto" />
      <StyledTypography>{text}</StyledTypography>
    </Container>
  );
};

export default VideoBackground;
