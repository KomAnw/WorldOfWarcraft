import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Pages } from './types';
import { StyledNavLink, StyledMenuItem, StyledMenu } from './styles';
import Arrow from 'components/Arrow';

const NestedMenu = ({ pages, title }: Pages) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <StyledMenuItem id="basic-button" onClick={handleClick}>
        {title}
        <Arrow open={open} />
      </StyledMenuItem>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {pages.map((page: any) => (
          <StyledNavLink to={page.path}>
            <StyledMenuItem key={page.name} disableRipple={true}>
              <Typography textAlign="center">{page.name}</Typography>
            </StyledMenuItem>
          </StyledNavLink>
        ))}
      </StyledMenu>
    </>
  );
};

export default NestedMenu;
