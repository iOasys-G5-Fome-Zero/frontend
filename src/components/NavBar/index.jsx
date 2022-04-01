import NavLink from "../NavLink"
import * as S from "./styles"

const NavBar = () => {
    return (
        <S.NavBar>
            <div className="pages">
                <NavLink path="/" label="Início"></NavLink>
                <NavLink path="/sobre" label="Sobre"></NavLink>
                <NavLink path="/cadastro" label="Cadastro"></NavLink>
            </div>
            <div className="auth">
                <NavLink path="/login" label="Entrar"></NavLink>
                <NavLink path="/cadastro" label="Cadastre-se" special={true}></NavLink>
            </div>
        </S.NavBar>
    )
}

export default NavBar
