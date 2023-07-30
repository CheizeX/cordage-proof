import { createGlobalStyle } from "styled-components";

export const GlobalStyleCordage = createGlobalStyle`
    
    @font-face {
    font-family: 'Satoshi-Variable';
    src: url('./fonts/Satoshi-Variable.woff2') format('woff2'),
        url('./fonts/Satoshi-Variable.woff') format('woff'),
        url('./fonts/Satoshi-Variable.ttf') format('truetype');
        font-weight: 300 900;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
    font-family: 'Lora-Variable';
    src: url('./fonts/Lora-VariableFont_wght.ttf') format('ttf');
        font-weight: 300 900;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
    font-family: 'JetBrains Mono';
    src: url('./fonts/JetBrainsMono-VariableFont_wght.ttf') format('ttf');
        font-weight: 300 900;
        font-display: swap;
        font-style: normal;
    }


    /**
    * This is a variable font
    * You can controll variable axes as shown below:
    * font-variation-settings: 'wght' 900.0;
    *
    * available axes:

    * 'wght' (range from 300.0 to 900.0)

    */

    @font-face {
    font-family: 'Satoshi-VariableItalic';
    src: url('./fonts/Satoshi-VariableItalic.woff2') format('woff2'),
        url('./fonts/Satoshi-VariableItalic.woff') format('woff'),
        url('./fonts/Satoshi-VariableItalic.ttf') format('truetype');
        font-weight: 300 900;
        font-display: swap;
        font-style: italic;
    }


    @font-face {
    font-family: 'Satoshi-Light';
    src: url('./fonts/Satoshi-Light.woff2') format('woff2'),
        url('./fonts/Satoshi-Light.woff') format('woff'),
        url('./fonts/Satoshi-Light.ttf') format('truetype');
        font-weight: 300;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'Satoshi-LightItalic';
    src: url('./fonts/Satoshi-LightItalic.woff2') format('woff2'),
        url('./fonts/Satoshi-LightItalic.woff') format('woff'),
        url('./fonts/Satoshi-LightItalic.ttf') format('truetype');
        font-weight: 300;
        font-display: swap;
        font-style: italic;
    }


    @font-face {
    font-family: 'Satoshi-Regular';
    src: url('./fonts/Satoshi-Regular.woff2') format('woff2'),
        url('./fonts/Satoshi-Regular.woff') format('woff'),
        url('./fonts/Satoshi-Regular.ttf') format('truetype');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'Satoshi-Italic';
    src: url('./fonts/Satoshi-Italic.woff2') format('woff2'),
        url('./fonts/Satoshi-Italic.woff') format('woff'),
        url('./fonts/Satoshi-Italic.ttf') format('truetype');
        font-weight: 400;
        font-display: swap;
        font-style: italic;
    }


    @font-face {
    font-family: 'Satoshi-Medium';
    src: url('./fonts/Satoshi-Medium.woff2') format('woff2'),
        url('./fonts/Satoshi-Medium.woff') format('woff'),
        url('./fonts/Satoshi-Medium.ttf') format('truetype');
        font-weight: 500;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'Satoshi-MediumItalic';
    src: url('./fonts/Satoshi-MediumItalic.woff2') format('woff2'),
        url('./fonts/Satoshi-MediumItalic.woff') format('woff'),
        url('./fonts/Satoshi-MediumItalic.ttf') format('truetype');
        font-weight: 500;
        font-display: swap;
        font-style: italic;
    }


    @font-face {
    font-family: 'Satoshi-Bold';
    src: url('./fonts/Satoshi-Bold.woff2') format('woff2'),
        url('./fonts/Satoshi-Bold.woff') format('woff'),
        url('./fonts/Satoshi-Bold.ttf') format('truetype');
        font-weight: 700;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'Satoshi-BoldItalic';
    src: url('./fonts/Satoshi-BoldItalic.woff2') format('woff2'),
        url('./fonts/Satoshi-BoldItalic.woff') format('woff'),
        url('./fonts/Satoshi-BoldItalic.ttf') format('truetype');
        font-weight: 700;
        font-display: swap;
        font-style: italic;
    }


    @font-face {
    font-family: 'Satoshi-Black';
    src: url('./fonts/Satoshi-Black.woff2') format('woff2'),
        url('./fonts/Satoshi-Black.woff') format('woff'),
        url('./fonts/Satoshi-Black.ttf') format('truetype');
        font-weight: 900;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'Satoshi-BlackItalic';
    src: url('./fonts/Satoshi-BlackItalic.woff2') format('woff2'),
        url('./fonts/Satoshi-BlackItalic.woff') format('woff'),
        url('./fonts/Satoshi-BlackItalic.ttf') format('truetype');
        font-weight: 900;
        font-display: swap;
        font-style: italic;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Satoshi-Variable";
        /* -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;  */
    }

    html{
        font-size: 62.5%; 
    } 

    button {
        border:none;
        cursor:pointer;
        &:active{
            opacity: 1;
        }
    }
    
`;
