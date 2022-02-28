import styled from 'styled-components';

export const StyledArrow = styled.a`
  height: 0px;
  width: 20px;
  display: block;
  padding: 0;
  margin-left: 5px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
`;

export const LeftBar = styled.span`
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  width: 13px;
  height: 3px;
  display: block;
  float: right;
  border-radius: 2px;
  transform: rotate(35deg);
  &:after {
    content: '';
    background-color: #dcbb2c;
    width: 13px;
    height: 3px;
    display: block;
    float: right;
    border-radius: 6px 10px 10px 6px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
    transform-origin: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen && `center center`};
    transform: ${({ isOpen }) => isOpen && `rotate(-70deg)`};
  }
`;

export const RightBar = styled.span`
  position: absolute;
  background-color: transparent;
  top: 0px;
  left: 9px;
  width: 13px;
  height: 3px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 2px;
  &:after {
    content: '';
    background-color: #dcbb2c;
    width: 13px;
    height: 3px;
    display: block;
    float: right;
    border-radius: 10px 6px 6px 10px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
    transform-origin: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen && `center center`};
    transform: ${({ isOpen }) => isOpen && `rotate(70deg)`};
  }
`;
