import React from 'react';
import { useGetClassQuery } from 'api/ClassesApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetClassesInfoQuery } from 'api/ClassesInfoApi';
import { Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import {
  StyledStack,
  SkeletonTextContainer,
  SkeletonImage,
  SkeletonTitle,
  Skeletondescription,
  CuttedText,
  ActionContainer,
  ViewContainer,
  StyledCard,
  StyledCardContent,
} from './styles';

const PopupCard = ({ id }: { id: number }) => {
  const { data: classData, isLoading } = useGetClassQuery(id ?? skipToken);
  const { data: classesInfo } = useGetClassesInfoQuery();
  const imagesRoot = require.context(`../../assets`, true);

  if (isLoading) {
    return (
      <StyledStack>
        <SkeletonImage animation='wave' variant='rectangular' height={200} />
        <SkeletonTextContainer>
          <SkeletonTitle animation='wave' />
          <Skeletondescription animation='wave' variant='text' />
          <Skeletondescription animation='wave' variant='text' />
          <Skeletondescription animation='wave' variant='text' />
        </SkeletonTextContainer>
      </StyledStack>
    );
  }

  if (classData && classesInfo) {
    const currentClass = classesInfo.classes.find((el) => el.id === id);
    const { name } = classData;
    const { img, description } = currentClass;

    return (
      <ViewContainer
        as={motion.div}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}>
        <StyledCard>
          <ActionContainer>
            <CardMedia
              component='img'
              image={imagesRoot(`./${img}.jpg`)}
              alt=''
              loading='lazy'
            />
            <StyledCardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {name}
              </Typography>
              <CuttedText gutterBottom>{description}</CuttedText>
            </StyledCardContent>
          </ActionContainer>
        </StyledCard>
      </ViewContainer>
    );
  }

  return null;
};

export default PopupCard;
