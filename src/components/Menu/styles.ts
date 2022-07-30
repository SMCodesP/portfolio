import styled from 'styled-components';

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 36px;
`;

export const Logo = styled.label`
  font-family: 'Press Start 2P';
`;

export const ListMenuItem = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  font-family: 'Rubik';
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;

  &.selected {
    font-weight: bold;
  }

  &.selected::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.comment};
    bottom: -5px;
  }
`;

export const LoginButton = styled.button`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 14px;
  padding: 12px 32px;
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.comment};
  color: ${({ theme }) => theme.foreground};
  box-shadow: 0 0 6px ${({ theme }) => theme.purple}44;
  transition: box-shadow 0.4s, filter 0.4s;

  &:hover {
    filter: brightness(130%);
    box-shadow: 0 0 16px ${({ theme }) => theme.purple}44;
  }
`;
