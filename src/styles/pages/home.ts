import styled from 'styled-components';
import { Particles } from 'react-tsparticles';
import Image from 'next/image';

export const ContainerHome = styled.div``;

export const HeaderHome = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const ContainerContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 75px 0;
  position: relative;
  overflow: hidden;
  height: max-content;
  display: flex;
`;

export const ParticlesContainer = styled(Particles)`
  height: 100%;

  & canvas {
    opacity: 0.4;
    position: inherit !important;
  }
`;

export const ContainerSpace = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  padding: 0 20%;
  margin-top: 120px;

  & span {
    font-family: 'Press Start 2P';
    font-weight: bold;
    font-size: 26px;
    color: ${({ theme }) => theme.purple};
    text-decoration: underline;
  }
`;

export const Skills = styled.div`
  width: fit-content;
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const BottomNetwork = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-around;
  list-style: none;

  & a {
    text-decoration: none;
  }
`;

export const Network = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  transition: filter 0.4s;
  cursor: pointer;

  &:hover {
    filter: brightness(130%);
  }
`;

export const NetworkLogo = styled.div`
  width: 52px;
  height: 52px;
  position: relative;
`;

export const NetworkContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 5px;
  user-select: none;
  color: ${({ theme }) => theme.currentLine};
`;

export const NetworkTitle = styled.p`
  font-size: 24px;
  line-height: 22px;
  font-weight: bold;
`;

export const NetworkDescription = styled.p`
  font-size: 16px;
  word-wrap: break-word;
  width: 100%;
`;

export const ContainerMain = styled.main``;
