import React from 'react';
import { StyledArrow, LeftBar, RightBar } from './styles';

const Arrow = ({ open }: { open: boolean }) => {
  return (
    <StyledArrow>
      <LeftBar open={open}></LeftBar>
      <RightBar open={open}></RightBar>
    </StyledArrow>
  );
};

export default Arrow;
