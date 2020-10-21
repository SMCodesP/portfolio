import styled from 'styled-components'
import { shade } from 'polished'

export const Button = styled.div`
  background: ${({theme}) => shade(0.25, theme.colors.secundaryBackground)};
  padding: 10px 15px;
  border-radius: 64px;
  width: fit-content;
  font-size: 18px;
  cursor: Pointer;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  position: relative;
  user-select: none;
  transition: filter .2s, border .2s;

  &:hover {
    filter: brightness(75%);
  }

  &:active {
    top: 2px;
    left: 2px;
    border: 0;
  }
`
