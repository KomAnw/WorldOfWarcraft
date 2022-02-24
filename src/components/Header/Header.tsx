import * as React from 'react';
import NavMenu from 'components/NavMenu/NavMenu';
import { StyledContainer, StyledAppBar, StyledToolbar } from './styles';

const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledContainer maxWidth="xl">
        <StyledToolbar disableGutters>
          <NavMenu />
        </StyledToolbar>
      </StyledContainer>
    </StyledAppBar>
  );
};

export default Header;
