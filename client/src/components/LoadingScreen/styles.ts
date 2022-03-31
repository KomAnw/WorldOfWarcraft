import styled from 'styled-components';
import mask from '../../assets/LoadingScreen/mask.jpg';

export const Container = styled('div')`
  background: linear-gradient(
    90deg,
    rgb(0 4 155 / 100%) 0%,
    rgb(155 0 2 / 100%) 100%
  );
  height: 100vh;
  width: 100vw;
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const ImagesContainer = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  align-items: center;
`;

export const Aliance = styled('img')`
  width: 200px;
`;
export const Horde = styled('img')`
  width: 220px;
`;

export const GearsContainer = styled('div')`
  display: grid;
  justify-content: center;
  align-items: center;

  .machine {
    fill: rgb(255 255 255 / 90%);
    width: 60vmin;
    width: 150px;
    justify-self: center;
  }

  .small-shadow,
  .medium-shadow,
  .large-shadow {
    fill: rgba(0, 0, 0, 0.05);
  }

  .small {
    animation: counter-rotation 2.5s infinite linear;
    transform-origin: 100.136px 225.345px;
  }

  .small-shadow {
    animation: counter-rotation 2.5s infinite linear;
    transform-origin: 110.136px 235.345px;
  }

  .medium {
    animation: rotation 3.75s infinite linear;
    transform-origin: 254.675px 379.447px;
  }

  .medium-shadow {
    animation: rotation 3.75s infinite linear;
    transform-origin: 264.675px 389.447px;
  }

  .large {
    animation: counter-rotation 5s infinite linear;
    transform-origin: 461.37px 173.694px;
  }

  .large-shadow {
    animation: counter-rotation 5s infinite linear;
    transform-origin: 471.37px 183.694px;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes counter-rotation {
    from {
      transform: rotate(359deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

export const Text = styled('div')`
  color: rgb(255 255 255 / 90%);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;
