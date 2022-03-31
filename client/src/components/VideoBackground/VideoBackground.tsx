import React from 'react';
import WoWLogo from 'assets/Home/WorldofWarcraftlogo.png';
import {
  Container,
  Video,
  Image,
  InfoContainer,
  Title,
  Paragraph,
} from './styles';

const VideoBackground = ({ video, text }) => {
  const { title, description } = text;
  return (
    <Container>
      <Image src={WoWLogo} alt='' />
      <Video src={video} autoPlay loop muted preload='auto' />
      <InfoContainer>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </InfoContainer>
    </Container>
  );
};

export default VideoBackground;
