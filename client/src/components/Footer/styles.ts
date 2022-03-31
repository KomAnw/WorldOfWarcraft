import styled from 'styled-components';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const StyledContainer = styled(Container)`
  background: #271812;
  padding: 15px 0;
`;

export const StyledToolbar = styled(Toolbar)`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledTypography = styled(Typography)`
  color: white;
  font-size: 14px;
  text-align: center;
`;

export const Link = styled('span')`
  display: inline-block;
  text-align: center;
  color: #dcbb2c;
  font-size: 14px;
  margin-left: 5px;
  &:hover {
    color: #ffd831;
  }
`;
