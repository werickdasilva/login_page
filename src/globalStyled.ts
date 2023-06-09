import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, #root {
        height: 100vh;
        width: 100vw;
        font-family: Arial, Helvetica, sans-serif;
    }
`