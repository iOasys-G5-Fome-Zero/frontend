import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary.dark};
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: white;
    align-self: center;
    &:active {
        background-color: ${({ theme }) => theme.colors.primary.dark};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary.mediumDark};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
    }
    &:disabled {
        background-color: ${({ theme }) => theme.colors.grayscale.medium};
        pointer-events: none;
        cursor: default;
        &:hover {
            background-color: ${({ theme }) => theme.colors.grayscale.medium};
        }
    }
`

export default StyledButton
