import styled from "styled-components"

const NavBar = styled.div`
    display: flex;
    padding: 10px 10%;
    .pages{
        display: flex;
        font-weight: bold;
        gap: 40px;
    }
    .auth{
        gap: 40px;
        font-weight: 400;
        margin-left: auto;
        display: flex;
    }
`

export { NavBar }
