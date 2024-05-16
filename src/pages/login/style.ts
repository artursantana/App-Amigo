import styled from "@emotion/styled";


import {  primeColor, primeColor2 } from '../../app/style'


export const Container = styled.div`

display: flex;
flex-direction: column;
width: 100%;
height: 99vw;
background-color: ${primeColor};

`
export const ContainerMain = styled.div`

margin: auto;
width: 350px;
height: 280px;
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

export const ContainerButtonLogin = styled.div`

display: flex;
flex-direction: column;
height: 120px;

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

p{
    text-align: center;
    a{
        font-weight: 900;
        text-decoration: none;
        color: ${primeColor};
    }
}

`