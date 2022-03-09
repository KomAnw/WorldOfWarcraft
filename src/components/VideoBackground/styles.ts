import styled from '@emotion/styled/macro';
import Typography from '@mui/material/Typography';

export const Container = styled.div`
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
`;

export const Image = styled.img`
  width: 200px;
  position: absolute;
  top: 50px;
  right: 50px;
`;

export const StyledTypography = styled(Typography)`
  position: absolute;
  bottom: 200px;
  left: 50px;
  font-size: 26px;
  color: #fff;
  text-shadow: 0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%);
  font-weight: 700;
`;
