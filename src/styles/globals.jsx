import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *, *::after, *::before {

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro';
        color: inherit;
        text-decoration: none;
        transition: 200ms all;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        border: none;
        cursor: pointer;
        background: inherit;
    }

    input{
        color: inherit;
    }

    
    section{
        padding: 0% 12%;
        width: 100%;
    }

`
