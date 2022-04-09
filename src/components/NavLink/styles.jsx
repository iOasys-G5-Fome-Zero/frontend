import styled from "styled-components"

const NavBarLink = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: ${({ bold }) =>  bold ? "bold" : "normal"};
    color: ${({ special }) => special ? "white" : "#00843F"};
    padding: 12px 12px 5px 12px;
    border-radius: 9999px;
    background-color: ${({ special }) => special ? "#00843F" : "initial"};
    &:hover {
        background-color: ${({ disableHighlight }) => disableHighlight ? "" : "#FF6B24"};
    }
    .highlight{
        height: 5px;
        width: 10px;
        border-radius: 9999px;
        background-color: ${({ highlight, disableHighlight }) => (highlight && !disableHighlight) ? "#FF6B24" : "transparent"};
        margin: auto;
    }
`

export { NavBarLink }
