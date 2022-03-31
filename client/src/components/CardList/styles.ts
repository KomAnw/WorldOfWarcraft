import styled from '@emotion/styled/macro';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MotionProps } from './types';

export const ViewContainer = styled('div')<{ whileHover: any }>`
  width: 100%;
  min-height: 250px;
`;

export const CardsList = styled('div')`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 30px;
  margin: -40px 0px 0px 0px;
  padding: 20px 20px 40px 20px;
`;

export const StyledCardContent = styled(CardContent)`
  color: #dcbb2c;
  background: #271812;
`;

export const StyledCard = styled(Card)<MotionProps>`
  width: 100%;
  background: transparent;
  border-radius: 13px;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #ffd831;
  }
  &:hover ${StyledCardContent} {
    color: #ffd831;
  }
  .MuiTypography-root {
    margin: 0;
    font-size: 25px;
    font-weight: 500;
  }
  img {
    height: 200px;
    object-fit: cover;
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: 16px !important;
  color: white;
  font-weight: 400;
  margin-top: 5px !important;
`;

export const PopupCardsList = styled('div')`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 30px;
  margin: 0px;
  padding: 20px 20px 40px 20px;
`;
