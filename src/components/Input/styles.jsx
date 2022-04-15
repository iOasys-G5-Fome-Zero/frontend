import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 400px;
    margin-bottom: 30px;
    input {
        width: 100%;
        padding: 16px 10px;
        outline: none;
        font-size: 16px;
        border-radius: 4px;
        border: 1.5px solid ${({ theme }) => theme.colors.grayscale.mediumDark};
        &[type="password"]{
            color: ${({ theme }) => theme.colors.grayscale.mediumDark};
            font: small-caption;
            font-size: 16px;
        }
    }
    label {
        background-color: white;
        padding: 0px 4px;
        position: absolute;
        left: ${({ labelUp }) => (labelUp ? "10px" : "10px")};
        top: ${({ labelUp }) => (labelUp ? "-5px" : "16px")};
        font-size: ${({ labelUp }) => (labelUp ? "12px" : "initial")};
        font-weight: ${({theme}) => theme.fontWeights.semibold};
        color: ${({ labelUp, theme }) =>
            labelUp
                ? theme.colors.primary.dark
                : theme.colors.grayscale.medium};
    }
    .input-obs{
        margin-top: 4px;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.grayscale.mediumLight};
    }
    @media (max-width: 900px) {
        width: 100%;
    }
`

export { Container }