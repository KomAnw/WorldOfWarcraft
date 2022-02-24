import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background: #271812;
    opacity: 0.5;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: #dcbb2c;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    color: #ffd831;
  }
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  &.active ${StyledMenuItem} {
    background: #dcbb2c;
    color: #271812;
    border-radius: 4px;
  }
`;
