import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 920px;
    padding: 80px;
    background-image: url(${({ bkgSrc }) => bkgSrc});
    form {
        max-width: 95vw;
        padding: 40px 164px;
        background-color: ${({ theme }) => theme.colors.grayscale.white};
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        *{
            max-width: 400px;
        }
        h3 {
            margin-bottom: 38px;
            align-self: center;
        }
        p{
            margin-bottom: 24px;
            a{
                margin-left: 20px;
                color: ${({ theme }) => theme.colors.primary.dark};
                text-decoration: underline;
            }
        }
    }
    .obs{
        margin-top: 24px;
    }
    button{
        background-color: ${({ theme }) => theme.colors.primary.dark};
        height: 50px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        color: white;
        align-self: center; 
        &:hover{
            background-color: ${({ theme }) => theme.colors.primary.mediumDark};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
        }
    }
    @media(max-width: 900px){
        padding: 40px 20px;
        form{
            padding: 30px;
        }
    }
`

const RadioContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 8px;
    input {
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 24px;
        height: 24px;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:checked{
            border-color: ${({ theme }) => theme.colors.primary.medium};
        }
        &::before {
            display: block;
            content: " ";
            width: 16px;
            height: 16px;
            background-color: ${({ theme }) => theme.colors.primary.medium};
            border-radius: 50%;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em var(--form-control-color);
        }
        &:checked::before {
            transform: scale(1);
        }
    }
`

export { Container, RadioContainer }