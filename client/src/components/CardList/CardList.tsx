import React, { useRef } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardListData, CardDataExtended } from './types';
import {
  StyledCard,
  StyledCardContent,
  CardsList,
  StyledTypography,
  ViewContainer,
  PopupCardsList,
} from './styles';
import { motion } from 'framer-motion';
import useOnScreen from 'hooks/useOnScreen';
import PopupCard from 'components/PopupCard';

const imagesRoot = require.context(`../../assets`, true);

const getRandomInt = () => Math.random() * (0.75 - 0.3);

const LinkCard = ({ title, text, img, index }: CardDataExtended) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const image = imagesRoot(`./Home/${img}`);

  return (
    <ViewContainer
      ref={ref}
      as={motion.div}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}>
      {isVisible && (
        <StyledCard
          as={motion.div}
          initial={index % 2 ? { x: '110%' } : { x: '-110%' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: getRandomInt() }}>
          <CardActionArea>
            <CardMedia component='img' image={image} alt='' loading='lazy' />
            <StyledCardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {title}
              </Typography>
              <StyledTypography gutterBottom>{text}</StyledTypography>
            </StyledCardContent>
          </CardActionArea>
        </StyledCard>
      )}
    </ViewContainer>
  );
};

const CardList = (props: CardListData) => {
  const { data, fetchedData } = props;

  if (fetchedData) {
    return (
      <PopupCardsList>
        {fetchedData.map((data) => (
          <PopupCard id={data.id} key={data.id} />
        ))}
      </PopupCardsList>
    );
  }

  return (
    <CardsList>
      {data &&
        data.map((card, index) => (
          <LinkCard
            title={card.title}
            text={card.text}
            img={card.img}
            key={card.title}
            index={index}
          />
        ))}
    </CardsList>
  );
};

export default CardList;
