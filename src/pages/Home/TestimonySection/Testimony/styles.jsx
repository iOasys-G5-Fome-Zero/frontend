import styled from 'styled-components'

const Container = styled.div`
    max-width: 384px;
    height: 264px;
    display: flex;
    font-size: 16px;
    margin: 70px 0px;
    padding: 15px;
    box-shadow: ${({ theme }) => theme.shadows.testimony};
    align-self: ${({ right }) => (right ? 'flex-start' : 'flex-end')};
    margin-left: auto;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.grayscale.white};
    .testimony {
        justify-content: flex-end;
        display: flex;
    }
    .producer-name {
        margin-top: auto;
        font-weight: 600;
    }
    .text {
        padding: 15px 10px;
        height: 100%;
        width: 90%;
        display: flex;
        flex-direction: column;
        .opinion {
            font-style: italic;
        }
    }
    .small-quotes {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px;
        img {
            width: 20px;
        }
    }
    h4 {
        margin-top: 20px;
    }
    span {
        color: lightgray;
    }

    @media (max-width: 920px) {
        margin: auto;
        min-width: 100%;
    }
`

export { Container }
