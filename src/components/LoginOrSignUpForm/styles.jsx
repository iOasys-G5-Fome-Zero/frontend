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
        background-color: white;
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
                color: #00843F;
                text-decoration: underline;
            }
        }
    }
    .obs{
        margin-top: 24px;
    }
    button{
        background-color: #00843F;
        height: 50px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        color: white;
        align-self: center; 
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
            border-color: #00843F;
        }
        &::before {
            display: block;
            content: " ";
            width: 12px;
            height: 12px;
            background-color: #00843F;
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