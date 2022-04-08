import NavLink from "../NavLink"
import * as S from "./styles"
import OrangeLogo from "../../assets/Logos/OrangeLogo.png"

const NavBar = () => {
    return (
        <S.NavBar>
            <div className="pages">
                <img src={OrangeLogo} alt="" className="logo"/>
                <NavLink path="/" label="Início"></NavLink>
                <NavLink path="/sobre" label="Sobre"></NavLink>
                <NavLink path="/cadastro" label="Cadastro"></NavLink>
            </div>
            <div className="auth">
                <NavLink path="/login" label="Entrar"></NavLink>
                <NavLink
                    path="/cadastro"
                    label="Cadastre-se"
                    special={true}
                    disableHighlight={true}
                ></NavLink>
            </div>
        </S.NavBar>
    )
}

export default NavBar
