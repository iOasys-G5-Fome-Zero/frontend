import styled from 'styled-components'

const NavBarLink = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ special, theme }) =>
        special ? theme.colors.grayscale.white : theme.colors.primary.dark};
    padding: 12px 12px 5px 12px;
    border-radius: 4px;
    background-color: ${({ special, theme }) =>
        special ? theme.colors.primary.dark : 'initial'};
    &:hover {
        background-color: ${({ disableHighlight, theme }) =>
            disableHighlight ? '' : theme.colors.secondary.pale};
    }
    .highlight {
        height: 4px;
        width: 12px;
        border-radius: 9999px;
        background-color: ${({ highlight, disableHighlight, theme }) =>
            highlight && !disableHighlight
                ? theme.colors.secondary.dark
                : 'transparent'};
        margin: auto;
    }
`

export { NavBarLink }
