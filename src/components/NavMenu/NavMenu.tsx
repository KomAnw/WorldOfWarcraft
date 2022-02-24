import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NestedMenu from 'components/NestedMenu';
import WoWLogo from 'assets/Header/WoWLogo.svg';
import BlizzLogo from 'assets/Header/BlizzLogo.svg';
import MenuItem from '@mui/material/MenuItem';

import * as constants from 'constants/index';
import {
  StyledImg,
  StyledNavLink,
  LogoContainer,
  StyledBox,
  StyledMenuIcon,
  StyledMenu,
  StyledCloseIcon,
  Blizz,
} from './styles';

const SimpleLink = ({ page }) => {
  const { name, path } = page;
  return (
    <StyledNavLink key={name} to={path}>
      <MenuItem disableRipple={true}>
        <Typography textAlign="center">{name}</Typography>
      </MenuItem>
    </StyledNavLink>
  );
};

const NavMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton onClick={handleOpenNavMenu}>
          <StyledMenuIcon />
        </IconButton>
        <StyledMenu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <StyledCloseIcon onClick={handleCloseNavMenu} />
          {constants.PAGES.map((page) =>
            page.nested ? (
              <NestedMenu pages={page.nested} title={page.name} />
            ) : (
              <SimpleLink page={page} />
            )
          )}
          <Blizz src={BlizzLogo} alt="" />
        </StyledMenu>
      </Box>

      <LogoContainer>
        <NavLink to="/">
          <StyledImg src={WoWLogo} alt="" />
        </NavLink>
      </LogoContainer>

      <StyledBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {constants.PAGES.map((page) =>
          page.nested ? (
            <NestedMenu pages={page.nested} title={page.name} />
          ) : (
            <SimpleLink page={page} />
          )
        )}
      </StyledBox>
    </>
  );
};

export default NavMenu;
