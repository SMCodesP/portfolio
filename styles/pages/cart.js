import styled from 'styled-components'
import { shade } from "polished";

export const ContainerPage = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
`

export const ProductsShopping = styled.ul`
    flex: 3;
    background: ${({theme}) => theme.colors.secundaryBackground};
    white-space: pre-wrap;
    border-radius: 5px;
    padding: 5px;
`

export const ConclusionPurchase = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.colors.secundaryBackground};
    white-space: pre-wrap;
    border-radius: 5px;
    padding: 10px 5px;
    margin-left: 5px;

    & h3 {
        align-self: center;
        padding: 7.5px;
    }

    & hr {
        width: 95%;
        border-radius: 5px;
        align-self: center;
        border: 1px solid ${({theme}) => theme.colors.background};
    }
`

export const Product = styled.li`
    display: flex;
    margin: 15px;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.background};

    & svg {
        transition: filter .2s;
    }

    & svg:hover {
        filter: brightness(75%);
    }
`

export const ImageLogo = styled.img`
    text-align: center;
    align-self: center;
`

export const Title = styled.h1`
    margin: 0 20px;
`

export const Description = styled.div`
    margin: 0 30px;
    transform: scale(0.95);
`

export const Money = styled.span`
    color: #85bb65;
    font-weight: bold;
    font-size: 20px;
`

export const FinishPayment = styled.button`
    background: #ff79c6;
    font-size: 18px;
    color: #282a36;
    font-weight: bold;
    width: fit-content;
    border: 0;
    border-right: 3px solid ${shade(0.2, '#ff79c6')};
    border-bottom: 3px solid ${shade(0.2, '#ff79c6')};
    border-radius: 5px;
    padding: 10px 25px;
    cursor: pointer;
    align-self: center;
    transition: filter .2s;

    &:hover {
        filter: brightness(75%);
    }

    &:active {
        position: relative;
        top: 3px;
        left: 3px;
        border: 0;
        margin-right: 3px;
        margin-bottom: 3px;
    }
`
