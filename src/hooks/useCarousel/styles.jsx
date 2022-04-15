import styled from "styled-components"

const Indicator = styled.div`
    @media(min-width: 900px){
        display: none;
    }
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ selected, theme }) =>
        selected
            ? theme.colors.primary.medium
            : theme.colors.primary.dark};
    transform: ${({ selected }) => (selected ? "scale(150%)" : "scale(100%)")};
`

export default Indicator
