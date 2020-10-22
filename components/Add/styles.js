import styled from 'styled-components'
import { shade } from 'polished'

export const Button = styled.div`
  border: 1px solid ${({theme}) => shade(0.25, theme.colors.secundaryBackground)};
  padding: 10px 15px;
  border-radius: 5px;
  width: fit-content;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  transition: filter .2s;

  &:hover {
    filter: brightness(75%);
    background: ${({theme}) => theme.colors.background};
  }

  &:active {
    filter: brightness(50%);
  }
`

export const ContainerInput = styled.div`
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background};
  margin-left: 5px;
  padding: 15px 0;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`

