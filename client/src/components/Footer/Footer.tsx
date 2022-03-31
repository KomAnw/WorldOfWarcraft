import React from 'react';
import {
  StyledContainer,
  StyledToolbar,
  StyledTypography,
  Link,
} from './styles';

const Footer = () => {
  return (
    <footer>
      <StyledContainer maxWidth='xl'>
        <StyledToolbar disableGutters>
          <StyledTypography>
            World of Warcraft pet project by
            <a
              title='Github link'
              href='https://github.com/KomAnw/WorldOfWarcraft'
              target='_blank'
              rel='noreferrer'>
              <Link>@Anwe/wow</Link>
            </a>
          </StyledTypography>
          <StyledTypography>2022</StyledTypography>
        </StyledToolbar>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
