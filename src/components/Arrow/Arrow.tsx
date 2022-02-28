import React from 'react';
import { StyledArrow, LeftBar, RightBar } from './styles';

const Arrow = ({
  isOpen,
  isHovered,
}: {
  isOpen: boolean;
  isHovered?: boolean;
}) => {
  return (
    <StyledArrow>
      <LeftBar isOpen={isOpen}></LeftBar>
      <RightBar isOpen={isOpen}></RightBar>
    </StyledArrow>
  );
};

export default Arrow;
