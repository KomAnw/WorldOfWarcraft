import React, { ReactElement } from 'react';
import NavMenu from 'components/NavMenu/NavMenu';
import { StyledContainer, StyledAppBar, StyledToolbar } from './styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const HideOnScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  return (
    <HideOnScroll>
      <StyledAppBar position="sticky">
        <StyledContainer maxWidth="xl">
          <StyledToolbar disableGutters>
            <NavMenu />
          </StyledToolbar>
        </StyledContainer>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default Header;
