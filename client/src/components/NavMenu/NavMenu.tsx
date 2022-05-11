import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NestedMenu from 'components/NestedMenu';
import WoWLogo from 'assets/Header/WoWLogo.svg';
import BlizzLogo from 'assets/SideMenu/Blizzard.png';
import MenuItem from '@mui/material/MenuItem';
import * as constants from 'constants/index';
import {
  MobileBox,
  StyledImg,
  StyledNavLink,
  LogoContainer,
  DesktopBox,
  StyledMenuIcon,
  StyledDrawer,
  StyledCloseIcon,
  Blizz,
  LinksContainer,
} from './styles';

const SimpleLink = ({ page }) => {
  const { name, path } = page;
  return (
    <StyledNavLink key={name} to={path}>
      <MenuItem disableRipple={true}>
        <Typography textAlign='center'>{name}</Typography>
      </MenuItem>
    </StyledNavLink>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <MobileBox>
        <IconButton onClick={handleMenu}>
          <StyledMenuIcon />
        </IconButton>
        <StyledDrawer open={isOpen} onClose={handleMenu} keepMounted>
          <StyledCloseIcon onClick={handleMenu} />
          <LinksContainer>
            {constants.PAGES.map((page, index) =>
              page.nested ? (
                <NestedMenu
                  pages={page.nested}
                  title={page.name}
                  key={page.name + index}
                />
              ) : (
                <SimpleLink page={page} key={page.name + index} />
              )
            )}
          </LinksContainer>
          <Blizz src={BlizzLogo} alt='' />
        </StyledDrawer>
      </MobileBox>

      <LogoContainer>
        <NavLink to='/'>
          <StyledImg src={WoWLogo} alt='' />
        </NavLink>
      </LogoContainer>

      <DesktopBox>
        {constants.PAGES.map((page, index) =>
          page.nested ? (
            <NestedMenu
              pages={page.nested}
              title={page.name}
              key={page.name + index}
            />
          ) : (
            <SimpleLink page={page} key={page.name + index} />
          )
        )}
      </DesktopBox>
    </>
  );
};

export default NavMenu;
