import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { url } from 'inspector';

export const Container = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  padding: 150px 0;
`;

export const Background = styled.img`
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 60%;
  display: grid;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
`;

export const Text = styled(Typography)`
  color: #ebdec2;
  font-size: 18px;
  text-align: center;
`;
