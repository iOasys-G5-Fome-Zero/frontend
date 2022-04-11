import styled from "styled-components"

const NavBar = styled.div`
    display: flex;
    padding: 10px 10%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
    .logo {
        height: 40px;
        width: 128.3px;
    }
    .desktop {
        display: flex;
        width: 100%;
    }
    .mobile {
        display: none;
    }
    .toggle {
        position: relative;
        color: #ff6b24;
        .container {
            opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
            z-index: ${({ menuOpen }) => (menuOpen ? "10" : "-10")};
            position: relative;
        }
        .toggle-menu {
            height: 260px;
            width: 230px;
            z-index: 10;
            position: absolute;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;           
            box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.12);
            padding: 20px 0px;
            border-radius: 8px;
            right: 0;
            bottom: -5px;
            transform: translateY(100%);
            hr {
                border: 0px;
                border-top: 1px solid #ff6b24;
                width: 80%;
            }
        }
    }
    .pages {
        display: flex;
        font-weight: bold;
        gap: 40px;
    }
    .auth {
        gap: 40px;
        font-weight: 400;
        margin-left: auto;
        display: flex;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        .pages {
            flex-direction: column;
        }
        .auth {
            flex-direction: column;
        }
        .desktop {
            display: none;
        }
        .mobile {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }
    }
`

export { NavBar }
