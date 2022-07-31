import styled from 'styled-components';

export const SkillContainer = styled.li`
  flex: 0 1 25%;
  font-size: 16px;
  text-align: center;
  border-radius: 25px;
  font-family: 'Rubik';
  padding: 2px 20px;
  background-color: ${({ theme }) => theme.foreground};
  box-shadow: 0 0 12px ${({ theme }) => theme.cyan}56;
  color: ${({ theme }) => theme.background};
  cursor: pointer;
  filter: brightness(80%);
  user-select: none;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(125%);
  }
`;

export const ListIframe = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow-y: auto;

  & img {
    user-select: none;
  }
`;
