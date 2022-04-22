import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  padding: 10px 10%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  box-shadow: ${({ theme }) => theme.shadows.nav};
  position: sticky;
  top: 0;
  z-index: 20;
  hr {
    border: 0px;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary.dark};
    width: 80%;
  }
  .special-link {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.grayscale.white};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    border-radius: 4px;
  }
  .user-menu {
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
`;

const UserMenu = styled.nav`
  color: ${({ theme }) => theme.colors.primary.dark};
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  button {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
  .log-out {
    padding: 8px 0px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
  .options {
    height: 130px;
    width: 130px;
    z-index: ${({ userMenuOpen }) => (userMenuOpen ? "1" : "0")};
    opacity: ${({ userMenuOpen }) => (userMenuOpen ? "1" : "0")};
    pointer-events: ${({ userMenuOpen }) => (userMenuOpen ? "all" : "none")};
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
    transform: translate(-100%, 100%);
    gap: 10px;
  }
  .icon {
    margin-left: 10px;
    transform: rotate(
      ${({ userMenuOpen }) => (userMenuOpen ? "180deg" : "0deg")}
    );
  }
`;

const Toggle = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary.dark};
  .container {
    position: relative;
    opacity: ${({ toggleOpen }) => (toggleOpen ? "1" : "0")};
    z-index: ${({ toggleOpen }) => (toggleOpen ? "1" : "-10")};
  }
  .toggle-menu {
    height: 260px;
    width: 230px;
    z-index: ${({ toggleOpen }) => (toggleOpen ? "1" : "-10")};
    pointer-events: ${({ toggleOpen }) => (toggleOpen ? "all" : "none")};
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
  }
  button {
    font-size: 16px;
  }
  .log-out {
    padding: 8px 0px;
    color: ${({ theme }) => theme.colors.primary.dark};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export { NavBar, UserMenu, Toggle };
