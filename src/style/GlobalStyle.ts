import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
    }

    body
    {
        background-color: rgb(18, 18, 24);
    }

    body, input, button, textarea
    {
        font-family: 'Poppins', sans-serif;
    }

    section
    {
        max-width: 1480px;
        min-width: 320px;
    }
`;

export default GlobalStyle;