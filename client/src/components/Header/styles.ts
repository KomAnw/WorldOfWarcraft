import { styled } from '@mui/material';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const StyledContainer = styled(Container)`
  background: #271812;
`;

export const StyledAppBar = styled(AppBar)`
  background: #271812;
  border-bottom: 1px solid #403913;
`;

export const StyledToolbar = styled(Toolbar)`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: auto 1fr;
  }
`;
