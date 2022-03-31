import styled from "styled-components"

const NavBarLink = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
    border-radius: 9999px;
    font-weight: bold;
    &:hover {
        background-color: lightgray;
    }
    .highlight{
        height: 5px;
        width: 10px;
        border-radius: 9999px;
        background-color: ${({ highlight }) => highlight ? "black" : "transparent"};
        margin: auto;
    }
`

export { NavBarLink }
