import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Cards, CardDataExtended } from './types';
import {
  StyledCard,
  StyledCardContent,
  CardList,
  StyledTypography,
} from './styles';

const PreviewCard = ({ title, text, img, dir }: CardDataExtended) => {
  const imagesRoot = require.context(`../../assets`, true);
  const image = imagesRoot(`./${dir}/${img}`);

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia component="img" image={image} alt="" />
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <StyledTypography gutterBottom>{text}</StyledTypography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
};

const PreviewCardList = ({ data, dir }: Cards) => {
  return (
    <CardList>
      {data.map((card, index) => (
        <PreviewCard
          title={card.title}
          text={card.text}
          img={card.img}
          dir={dir}
          key={index + card.title}
        />
      ))}
    </CardList>
  );
};

export default PreviewCardList;
