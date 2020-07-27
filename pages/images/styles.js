import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

	html, body {
		width: 100%;
		height: 100vh;
		background: #282a36;
	}

	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	::-webkit-scrollbar-track {
		background: #f0f0f0;
	}

	::-webkit-scrollbar-thumb {
		background: #333333;
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #222222;
	}

`

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: #282a36;
  justify-content: center;
`

export const ContainerImages = styled.main`
  width: 80%;
  background: #44475a;
  padding: 25px;
  margin-top: 75px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const ListImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover img {
    border-radius: 5px;
    filter: opacity(60%);
  }
`

export const TitleImage = styled.p`
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
  font-size: 14pt;
  color: #f8f8f2;
  background: #6272a4;
  margin: 0;
  width: 275px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const Image = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  transform: scale(1);
  transition: border-radius .2s, transform .4s, filter .2s;
  width: 275px;
  max-height: 400px;
`
