import { Link } from "react-router-dom"
import * as S from "./styles"
import { upperCaseFirstLetter } from "../../utils"
import { useLocation } from "react-router-dom"

const NavLink = ({ path, label, special, disableHighlight }) => {
    const location = useLocation()

    const isCurrentPage = location.pathname === path

    console.log(isCurrentPage)

    return (
        <Link to={path}>
            <S.NavBarLink highlight={isCurrentPage} special={special} disableHighlight={disableHighlight}>
                <div className="label">
                    {upperCaseFirstLetter(label)}
                </div>
                <div className="highlight"/>
            </S.NavBarLink>
        </Link>
    )
}

export default NavLink 