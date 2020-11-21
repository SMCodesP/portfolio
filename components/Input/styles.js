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
  transition: border .2s, width .5s;

  &:focus {
    border: 1px solid ${({theme}) => shade(0.5, theme.colors.secundaryBackground)};
  }

  @media (max-width: 1200px) {
    width: 65%;
  }

  @media (max-width: 900px) {
    width: 85%;
  }

  @media (max-width: 725px) {
    width: 95%;
  }

  @media (max-width: 650px) {
    ${({ style = { marginLeft: 0 } }) => `width: calc(99% - ${style.marginLeft});`}
  }
`
