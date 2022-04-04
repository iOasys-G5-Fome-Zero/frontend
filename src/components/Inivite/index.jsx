import * as S from "./styles"
import { Link } from "react-router-dom"

const Invite = ({ title, path }) => {
    return (
        <S.Invite>
            <h1>{title}</h1>
            <div className="sign-up-link">
                <Link to={path}>Cadastre-se</Link>
            </div>
        </S.Invite>
    )
} 

export default Invite