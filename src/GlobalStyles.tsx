import { createGlobalStyle } from "styled-components";

export const GlobalStyleCordage = createGlobalStyle`
    
    @font-face {
    font-family: 'Satoshi-Variable';
    src: url('/fonts/Satoshi-Variable.woff2') format('woff2'),
        url('/fonts/Satoshi-Variable.woff') format('woff'),
        url('/fonts/Satoshi-Variable.ttf') format('truetype');
        font-weight: 300 900;
        font-display: swap;
        font-style: normal;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Satoshi-Variable";
    }



    button {
        border:none;
        cursor:pointer;
        &:active{
            opacity: 1;
        }
    }
    
`;
