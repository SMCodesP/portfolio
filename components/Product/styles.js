import styled, { keyframes } from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const FadeInAnimation = keyframes`
from {
	opacity: 0;
	transform: translateY(30px);
}
to {
	opacity: 1;
	transform: translateY(0);
}
`;

const ContainerFade = keyframes`
from {
	opacity: 0;
	transform: translateY(65px);
}
to {
	opacity: 1;
	transform: translateY(0);
}
`

const animationBackgroundLoading = keyframes`
0% {
	filter: brightness(125%);
}
50% {
	filter: brightness(50%);
}
100% {
	filter: brightness(125%);
}
`

const loading = keyframes`
from {
	margin-left: -40px;
}
to   {
	margin-left: 100%;
}
`

export const ContainerPurchase = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;
opacity: 0;
padding: 10px 70px;
height: 0;
transition: height .2s, opacity .5s;
`

export const Title = styled.p`
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 18px;
color: #fafafa;
border-radius: 50px;
line-height: 20px;
padding: 5px 25px;
position: relative;
top: 15px;
cursor: default;
transition: filter .2s;
text-shadow: 1px 1px 5px #333;

&:hover {
	filter: brightness(70%);
}
`

export const TitleSkeleton = styled.div`
background-color: #e6e6e6;
border-radius: 5px;
width: 65%;
height: 30px;
padding: 5px 25px;
position: relative;
top: 15px;
cursor: default;
transition: filter 2s;
animation: ${animationBackgroundLoading} 5s infinite;

&:hover {
	filter: brightness(70%);
}
`

export const ImageSkeleton = styled.div`
background-color: #e0e0e0;
width: 128px;
height: 128px;
border-radius: 50%;
`

export const DescriptionSkeleton = styled.div`
background-color: #e6e6e6;
width: ${(props) => (props.width) ? props.width : 92}px;
height: 25px;
margin: 10px 0 0 0;

&::before {
  content: '';
  display: block;
	height: 25px;
  width: 75px;
  background: linear-gradient(to right, transparent 0%, #fafafa 50%, transparent 100%);
  animation: ${loading} 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
}
`

export const Container = styled.div`
background: #fafafa;
border-radius: 10px;
transition: margin .2s, height .2s;
padding-bottom: 10px;
border-bottom: 1px solid #bbb;
border-left: 1px solid #bbb;
border-right: 1px solid #bbb;
--color-var: #${(props) => props.color};
border-top: 4px solid var(--color-var);
animation: ${ContainerFade} 1s linear;

&:hover {
	${props => props.loading ? `margin: -20px 0 0 0` : ''};
}

&:hover ${ContainerPurchase} {
	opacity: 1;
	height: 50px;
}

${Title} {
	background: var(--color-var);
}
`;

export const Image = styled.img`
margin: -5px 0 5px 0;
border-radius: 15px;
max-width: 128px;
max-height: 128px;
transition: transform .2s;
cursor: none;
animation: ${FadeInAnimation} 1s linear, filter .2s;

&:hover {
	transform: scale(1.25) !important;
}
`

export const ContainerImage = styled.div`
display: flex;
flex-direction: column-reverse;
width: 100%;
background: #eee;
justify-content: center;
align-items: center;
padding: 10px 0 0 0;
border-bottom: 1px solid #aaaaaa;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
animation: ${FadeInAnimation} 1s linear;

&:hover ${Image} {
	transform: scale(1.1);
}
`

export const NewInfo = styled.p`
color: #fafafa;
align-self: flex-end;
background: #e02041;
padding: 6px 6px 6px 10px;
border-bottom-left-radius: 10px;
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
border-bottom: 4px solid #c00020;
transition: filter .2s, padding-right .2s;
cursor: pointer;
animation: ${FadeInAnimation} 1s linear;

&:hover {
	padding-right: 20px;
	filter: brightness(70%);
}
`

export const DescriptionList = styled.ul`
padding: 25px;
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 16px;
color: #333333;
list-style-position: inside;
line-height: 22px;
animation: ${FadeInAnimation} 1s linear;
`

export const DescriptionItem = styled.li`
padding: 3px;
text-shadow: 0 0 2px #333;
animation: ${FadeInAnimation} 1s linear;
`

export const PriceTitle = styled.p`
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 20px;
color: #222;
padding: 5px;
align-self: flex-end;
animation: ${FadeInAnimation} 1s linear;
`

// #2cb13h
export const PurchaseButton = styled.button`
background: #4ed359;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
width: 100%;
padding: 10px 0;
border: 0;
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 16px;
color: #fafafa;
cursor: pointer;
transition: filter .2s;
animation: ${FadeInAnimation} 1s linear;
`

export const BottomBorder = styled.div`
width: 100%;
animation: ${FadeInAnimation} 1s linear;

&:hover ${PurchaseButton},
&:hover:after  {
	filter: brightness(70%);
}
&:active ${PurchaseButton},
&:active:hover {
	filter: brightness(105%);
}
&:active ${PurchaseButton} {
	position: relative;
	margin-top: 4px;
}
&:active:after {
	height: 0;
}

&:after {
	transition: filter .2s;
	content: '';
	display: block;
	height: 4px;
	background: #2cb137;
	width: 100%;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
`

