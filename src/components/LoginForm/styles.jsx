import styled from 'styled-components'

const Checkmark = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary.dark};
    .checkbox-container {
        input {
            visibility: hidden;
        }
        .checkmark {
            background-color: ${({ checked, theme }) =>
                checked ? 'white' : theme.colors.grayscale.medium};
            color: ${({ checked, theme }) =>
                checked ? theme.colors.primary.dark : 'white'};
            width: min-content;
            height: min-content;
            padding: 0px 1px;
            font-size: 20px;
        }
    }
`

export { Checkmark }
