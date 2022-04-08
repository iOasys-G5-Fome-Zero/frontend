import styled from "styled-components"

const NavBar = styled.div`
    display: flex;
    padding: 10px 10%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
    .pages{
        .logo{
            height: 40px;
            width: 128.3px;
        }
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
