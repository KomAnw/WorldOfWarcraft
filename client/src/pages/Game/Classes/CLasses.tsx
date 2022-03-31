import React from 'react';
import TitleAndDescription from 'components/TitleAndDescription';
import classesImg from 'assets/Classes/classes.jpg';
import { imageBackgroundText } from 'constants/index';
import { useGetClassesQuery } from 'api/ClassesApi';
import CardList from 'components/CardList';
import styled from '@emotion/styled';

const Main = styled.main`
  background: #151b0f;
`;
const Container = styled.div`
  background-image: url(${classesImg});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Classes = () => {
  const { data: classesData } = useGetClassesQuery();
  const { title, text } = imageBackgroundText.classes;

  return (
    <Main>
      <Container>
        <TitleAndDescription title={title} text={text} />
        <CardList fetchedData={classesData} />
      </Container>
    </Main>
  );
};
