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

export const InfoContainer = styled.div`
  display: grid;
  max-width: 80%;
  position: absolute;
  bottom: 200px;
  left: 50px;
  gap: 10px;
`;

export const Title = styled(Typography)`
  font-size: 30px;
  color: #fff;
  text-shadow: 3px 3px 2px black, 0 1px 2px rgb(0 0 0);
  font-weight: 700;
  text-transform: uppercase;
`;

export const Paragraph = styled(Typography)`
  font-size: 20px;
  color: #fffbcf;
  text-shadow: 1px 1px 1px black, 0 1px 2px rgb(0 0 0);
  font-weight: 400;
`;
