import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 290px;
    background-color: #211510;
    border-right: 2px solid #352011;
  }
`;

export const MobileBox = styled(Box)`
  flex-grow: 1;
  display: none;
  @media (max-width: 900px) {
    display: block;
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

export const DesktopBox = styled(Box)`
  gap: 10px;
  flex-grow: 1;
  display: flex;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledImg = styled.img`
  width: 80px;
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
    color: #ffd831;
  }
  &.active {
    color: #ffd831;
  }
`;

export const LogoContainer = styled(Typography)`
  display: flex;
  justify-content: center;
`;

export const Blizz = styled('img')`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  bottom: 40px;
  margin-left: 13%;
`;

export const LinksContainer = styled.div`
  margin: 0 auto;
  width: 83%;
  margin-top: 50px;
  display: grid;
  gap: 10px;
`;
