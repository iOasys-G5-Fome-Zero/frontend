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
        font-size: ${({ theme }) => theme.fontSizes.h1};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        line-height: 150%;
    }

    h2{
        font-size: ${({ theme }) => theme.fontSizes.h2};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        line-height: 150%;
    }

    h3{
        font-size: ${({ theme }) => theme.fontSizes.h3};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        line-height: 150%;
    }

    h4{
        font-size: ${({ theme }) => theme.fontSizes.h4};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        line-height: 150%;
    }
    h5{
        font-size: ${({ theme }) => theme.fontSizes.h5};
        font-weight: ${({theme}) => theme.fontWeights.regular};
        line-height: 150%;
    }
    h6{
        font-size: ${({ theme }) => theme.fontSizes.h6};
        font-weight: ${({theme}) => theme.fontWeights.regular};
        line-height: 150%;
    }
    
    @media(max-width: 700px){
        h1{
            font-size: ${({ theme }) => theme.fontSizes.h3};
        }
        h2{
            font-size: ${({ theme }) => theme.fontSizes.h4};
        }
        h3{
            font-size: ${({ theme }) => theme.fontSizes.h5};
        }
        h4{
            font-size: ${({ theme }) => theme.fontSizes.h6};
        }
        h5{
            font-size: ${({ theme }) => theme.fontSizes.small};
            line-height: 120%;
        }
        h6{
            font-size: ${({ theme }) => theme.fontSizes.verySmall};
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
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
    }

`
