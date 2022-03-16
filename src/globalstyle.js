import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        font-size:62.5%;
        fonr-family:font-family: 'Manrope', sans-serif;
    }
    
    body{
        font-family: 'Manrope', sans-serif;
        font-size:1.6rem;
    }
    ul,li{
        list-style:none;
    }
`;
