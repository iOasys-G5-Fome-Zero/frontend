import styled from "styled-components"

const NavBarLink = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 12px 5px 12px;
    border-radius: 9999px;
    background-color: ${({ special }) => special ? "lightgray" : "initial"};
    &:hover {
        background-color: ${({ disableHighlight }) => disableHighlight ? "initial" : "lightgray"};
    }
    .highlight{
        height: 5px;
        width: 10px;
        border-radius: 9999px;
        background-color: ${({ highlight, disableHighlight }) => (highlight && !disableHighlight) ? "black" : "transparent"};
        margin: auto;
    }
`

export { NavBarLink }
