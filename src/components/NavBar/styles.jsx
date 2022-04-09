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
            &::before {
                content: "";
                position: absolute;
                right: 7px;
                top: 0;
                border: solid transparent;
                border-width: 0px 5px 10px 5px;
                border-bottom-color: #ff6b24;
            }
        }
        .toggle-menu {
            z-index: 10;
            position: absolute;
            background-color: #f7f7f7;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 15px;
            border: 3px solid #ff6b24;
            right: 0;
            bottom: -5px;
            transform: translateY(100%);
            hr {
                box-shadow: gray 2px 54px 55px;
                height: 2px;
                width: 80%;
                border-radius: 50%;
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
