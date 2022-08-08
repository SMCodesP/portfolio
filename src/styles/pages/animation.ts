import Particles from 'react-tsparticles';
import styled, { createGlobalStyle } from 'styled-components';

export const AnimationGlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    max-height: 100vh;
    /* overflow: hidden; */
  }
`;

export const AnimationParticles = styled(Particles)`
  & canvas {
    top: 0 !important;
  }
`;
