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
	margin: 25px 0;
	padding: 65px;
  background: #282a36;
  justify-content: center;
`

export const ContainerImages = styled.main`
  width: 90%;
  background: #44475a;
  padding: 35px;
  border-radius: 15px;
	display: flex;
	justify-content: center;
`

export const ListImages = styled.div`
  width: 80%;
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
  font-size: 12pt;
  color: #f8f8f2;
  margin: 0;
  width: 100%;
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
  max-width: 100%;
  max-height: 400px;
	border: 1px solid #aaaaaa;
	transition: width .2s;
`
