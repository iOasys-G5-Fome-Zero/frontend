import styled from "styled-components";

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
export { RadioContainer }