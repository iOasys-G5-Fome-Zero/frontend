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

    h1{
        font-size: 67px;
        font-weight: 600;
        line-height: 150%;
    }

    h2{
        font-size: 51px;
        font-weight: 600;
        line-height: 150%;
    }

    h3{
        font-size: 38px;
        font-weight: 600;
        line-height: 150%;
    }

    h4{
        font-size: 28px;
        font-weight: 600;
        line-height: 150%;
    }
    h5{
        font-size: 24px;
        font-weight: 400;
        line-height: 150%;
    }
    h6{
        font-size: 21px;
        font-weight: 400;
        line-height: 150%;
    }
    
    @media(max-width: 700px){
        h1{
            font-size: 38px;
            font-weight: 600;
            line-height: 150%;
        }
    
        h2{
            font-size: 28px;
            font-weight: 600;
            line-height: 150%;
        }
        h3{
            font-size: 24px;
            font-weight: 600;
            line-height: 150%;
        }
        h4{
            font-size: 21px;
            font-weight: 600;
            line-height: 150%;
        }
        h5{
            font-size: 16px;
            font-weight: 400;
            line-height: 120%;
        }
        h6{
            font-size: 14px;
        }
    }

    
    section{
        padding: 0% 12%;
        @media(max-width: 700px){
            padding: 0% 6%;
        }
        width: 100%;
    }

    .semibold{
        font-weight: 600;
    }

`
