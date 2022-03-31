import NavLink from "../NavLink"
import * as S from "./styles"
import StoresLinks from "../StoresLinks"

const NavBar = () => {
    return (
        <S.NavBar>
            <NavLink path="/" label="Início"></NavLink>
            <NavLink path="/sobre" label="Sobre"></NavLink>
            <NavLink path="/cadastro" label="Cadastro"></NavLink>
            <StoresLinks/>
        </S.NavBar>
    )
}

export default NavBar
