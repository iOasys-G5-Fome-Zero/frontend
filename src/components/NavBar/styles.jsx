import styled from "styled-components"

const NavBar = styled.div`
    display: flex;
    padding: 10px 10%;
    background-color: ${({ theme }) => theme.colors.grayscale.white};
    box-shadow: ${({ theme }) => theme.shadows.nav};
    position: sticky;
    top: 0;
    z-index: 20;
    .special-link{
        display: flex;
        align-items: center;
        padding: 10px 20px;
        font-size: 14px;
        background-color: ${({ theme }) => theme.colors.primary.dark};
        color: ${({ theme }) => theme.colors.grayscale.white};
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        border-radius: 4px;
    }
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
        color: ${({ theme }) => theme.colors.secondary.dark};
        .container {
            position: relative;
            opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
            z-index: ${({ menuOpen }) => (menuOpen ? "1" : "-10")};
        }
        .toggle-menu {
            height: 260px;
            width: 230px;
            z-index: ${({ menuOpen }) => (menuOpen ? "1" : "-10")};
            pointer-events: ${({ menuOpen }) => menuOpen ? "all" : "none"};
            position: absolute;
            background-color: ${({ theme }) => theme.colors.grayscale.white};
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;           
            box-shadow: ${({ theme }) => theme.shadows.toggle};
            padding: 20px 0px;
            border-radius: 8px;
            right: 0;
            bottom: -5px;
            transform: translateY(100%);
            hr {
                border: 0px;
                border-top: 1px solid ${({ theme }) => theme.colors.secondary.dark};
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
