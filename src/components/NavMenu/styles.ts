import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    top: 0 !important;
    left: 0 !important;
    height: 100vh;
    width: 290px;
    max-height: 100vh;
    border-radius: initial;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  fill: #dcbb2c;
  width: 35px;
  height: 35px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  margin: 28px 32px;
  fill: #dcbb2c;
  width: 35px;
  height: 35px;
  cursor: pointer;
  outline: none;
`;

export const StyledBox = styled(Box)`
  gap: 10px;
`;

export const StyledImg = styled.img`
  width: 100px;
  opacity: 0.9;
  margin-right: 10px;
  padding-top: 3px;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: #dcbb2c;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid #dcbb2c;
  }
  &.active {
    color: #ffd831;
    border-bottom: 2px solid #dcbb2c;
  }
`;

export const LogoContainer = styled(Typography)`
  display: flex;
  justify-content: center;
`;

export const Blizz = styled('img')``;
