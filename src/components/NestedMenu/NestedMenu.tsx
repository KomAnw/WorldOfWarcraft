import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Pages } from './types';
import { StyledNavLink, StyledMenuItem, StyledMenu } from './styles';
import Arrow from 'components/Arrow';

const NestedMenu = ({ pages, title }: Pages) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <StyledMenuItem id="basic-button" onClick={handleClick}>
        {title}
        <Arrow isOpen={isOpen} />
      </StyledMenuItem>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
      >
        {pages.map((page, index) => (
          <StyledNavLink to={page.path} key={page.name + index}>
            <StyledMenuItem disableRipple={true}>
              <Typography textAlign="center">{page.name}</Typography>
            </StyledMenuItem>
          </StyledNavLink>
        ))}
      </StyledMenu>
    </>
  );
};

export default NestedMenu;
