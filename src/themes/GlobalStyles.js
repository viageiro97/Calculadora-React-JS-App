import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        font-family: ${({theme})=>theme.fontFam};
        color: ${({theme})=>theme.color.white};
        background: ${({theme})=>theme.color.vdDesaturetedBlue1};
    }
`
export const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 380px;
    margin: 0 auto;

`