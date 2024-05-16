import styled from "@emotion/styled";


import {  primeColor, primeColor2 } from '../../app/style'


export const Container = styled.div`

display: flex;
flex-direction: column;
height: 99vw;
background-color: ${primeColor};

`
export const ContainerMain = styled.div`

a{
    position: absolute;
    top: 90px;
    left: 50px;
}

margin: auto;
width: 350px;

background-color: ${primeColor2};
padding: 15px;
border-radius: 20px;

`

export const ContainerLogo = styled.div`

display: flex;
justify-content: space-around;

`


export const ContainerInputs = styled.div`

display: flex;
flex-direction: column;
gap: 16px;

input{
    font-size: 25px;
}
`

export const ContainerButtonCreate = styled.div`

display: flex;
height: 78px;

button{
    margin: auto;
    width: 100%;
    font-size: 25px;
    height: 50px;
    border-radius: 15px;
    border: none;
    background-color: ${primeColor};
    color: white;

}

`