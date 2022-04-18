import NavLink from "../NavLink"
import * as S from "./styles"
import OrangeLogo from "../../assets/Logos/OrangeLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <S.NavBar menuOpen={menuOpen}>
            <div className="desktop">
                <div className="pages">
                    <img src={OrangeLogo} alt="" className="logo" />
                    <NavLink path="/" label="Início" />
                    <NavLink path="/sobre" label="Sobre" />
                    <NavLink path="/cadastro" label="Cadastro" />
                </div>
                <div className="auth">
                    <NavLink path="/login" label="Entrar" />
                    <Link to="/cadastro" className="special-link">Cadastre-se</Link>
                </div>
            </div>
            <div className="mobile">
                <img src={OrangeLogo} alt="" className="logo" />
                <div className="toggle">
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
                            <NavLink path="/cadastro" label="Cadastro" />
                            <hr />
                            <NavLink path="/login" label="Entrar" />
                        </nav>
                    </div>
                </div>
            </div>
        </S.NavBar>
    )
}

export default NavBar
