import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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

`
