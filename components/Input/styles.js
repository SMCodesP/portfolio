import styled from 'styled-components'
import { shade } from 'polished'

export const Input = styled.input`
  width: 45%;
  height: 35px;
  background: ${({theme}) => theme.colors.background};
  padding: 0 10px;
  border: 1px solid ${({theme}) => shade(0.25, theme.colors.secundaryBackground)};
  border-radius: 5px;
  font-size: 15px;
  transition: border .2s;

  &:focus {
    border: 1px solid ${({theme}) => shade(0.5, theme.colors.secundaryBackground)};
  }
`
