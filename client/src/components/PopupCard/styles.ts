import styled from '@emotion/styled/macro';
import { Skeleton } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { MotionProps } from './types';

export const ViewContainer = styled('div')<{ whileHover: any }>`
  width: 100%;
  min-height: 250px;
`;

export const StyledCardContent = styled(CardContent)`
  color: #dcbb2c;
  background: #271812;
`;

export const StyledCard = styled(Card)<MotionProps>`
  width: 100%;
  background: transparent;
  border-radius: 13px;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #ffd831;
  }
  &:hover ${StyledCardContent} {
    color: #ffd831;
  }
  .MuiTypography-root {
    margin: 0;
    font-size: 25px;
    font-weight: 500;
  }
  img {
    height: 200px;
    object-fit: cover;
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: 16px !important;
  color: white;
  font-weight: 400;
  margin-top: 5px !important;
`;

export const StyledStack = styled(Stack)`
  width: 100%;
  background: transparent;
  border-radius: 13px;
  border: 2px solid transparent;
`;

export const SkeletonTextContainer = styled('div')`
  width: calc(100% - 32px);
  background: #271812;
  padding: 16px;
`;

export const StyledSkeleton = styled(Skeleton)`
  background-color: rgb(98 98 98);
  width: 100%;
`;

export const SkeletonImage = styled(StyledSkeleton)`
  border-radius: 13px 13px 0 0;
`;

export const SkeletonTitle = styled(StyledSkeleton)`
  width: 40%;
  font-size: 30px;
`;

export const Skeletondescription = styled(StyledSkeleton)``;

export const CuttedText = styled(StyledTypography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ActionContainer = styled(CardActionArea)``;
