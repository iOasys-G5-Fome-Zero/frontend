import NavLink from "../NavLink";
import * as S from "./styles";
import OrangeLogo from "../../assets/Logos/OrangeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { loggedIn, user, logOut } = useContext(UserContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const authLinks = (
    <div className="auth">
      <NavLink path="/login" label="Entrar" />
      <Link to="/cadastro" className="special-link">
        Cadastre-se
      </Link>
    </div>
  );

  const userMenu = (
    <S.UserMenu userMenuOpen={userMenuOpen}>
      <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
        Olá, {user?.first_name || user?.firstName}!{" "}
        <FontAwesomeIcon className="icon" icon={faCircleChevronDown} />
      </button>
      <nav className="options">
        <NavLink
          path={`/${user?.user_type || user?.userType}`}
          label="Minha Página"
        />
        <hr />
        <button className="log-out" onClick={logOut}>
          Sair
        </button>
      </nav>
    </S.UserMenu>
  );

  return (
    <S.NavBar>
      <div className="desktop">
        <div className="pages">
          <img src={OrangeLogo} alt="" className="logo" />
          <NavLink path="/" label="Início" />
          <NavLink path="/sobre" label="Sobre" />
          <NavLink path="/cadastro" label="Cadastro" />
        </div>
        {loggedIn ? userMenu : authLinks}
      </div>
      <div className="mobile">
        <img src={OrangeLogo} alt="" className="logo" />
        <S.Toggle toggleOpen={menuOpen}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              icon={faBars}
              rotation={menuOpen ? 90 : 0}
              size={"2x"}
            />
          </button>
          <div className="container">
            <nav className="toggle-menu">
              <NavLink path="/" label="Início" />
              <hr />
              <NavLink path="/sobre" label="Sobre" />
              <hr />
              {loggedIn ? (
                <>
                  <NavLink
                    path={`/${user?.user_type || user?.userType}`}
                    label="Minha Página"
                  />
                  <hr />
                  <button className="log-out" onClick={logOut}>
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <NavLink path="/cadastro" label="Cadastro" />
                  <hr />
                  <NavLink path="/login" label="Entrar" />
                </>
              )}
            </nav>
          </div>
        </S.Toggle>
      </div>
    </S.NavBar>
  );
};

export default NavBar;
