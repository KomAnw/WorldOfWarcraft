import styled from '@emotion/styled/macro';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 30px;
  margin: -25px 10px 0 10px;
`;

export const StyledCardContent = styled(CardContent)`
  color: #dcbb2c;
  background: #271812;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  background: transparent;
  border-radius: 13px;
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
