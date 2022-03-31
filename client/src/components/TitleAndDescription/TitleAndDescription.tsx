import React from 'react';
import { TitleAndDescriptionProps } from './types';
import { Container, Text, Title, TextContainer } from './styles';

const TitleAndDescription = ({ title, text }: TitleAndDescriptionProps) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
    </Container>
  );
};

export default TitleAndDescription;
