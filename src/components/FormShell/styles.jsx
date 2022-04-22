import styled from 'styled-components'

import bkgSrc from '../../assets/SignUpBackground.png'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 920px;
    padding: 80px;
    background-image: url(${bkgSrc});
    background-size: cover;
    form {
        max-width: 95vw;
        padding: 40px 164px;
        background-color: ${({ theme }) => theme.colors.grayscale.white};
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        * {
            max-width: 400px;
        }
        h3 {
            margin-bottom: 38px;
            align-self: center;
        }
        p {
            margin-bottom: 24px;
            a {
                margin-left: 20px;
                color: ${({ theme }) => theme.colors.primary.dark};
                text-decoration: underline;
            }
        }
    }
    .obs {
        margin-top: 24px;
    }
    button {
        background-color: ${({ theme }) => theme.colors.primary.dark};
        height: 50px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        color: white;
        align-self: center;
        &:hover {
            background-color: ${({ theme }) => theme.colors.primary.mediumDark};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
        }
    }
    .error {
        align-self: center;
        font-weight: 600;
        color: red;
    }
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin-bottom: 20px;
    }
    .keep-logged {
    }
    @media (max-width: 900px) {
        padding: 40px 20px;
        form {
            padding: 30px;
        }
    }
`

export { Container }
