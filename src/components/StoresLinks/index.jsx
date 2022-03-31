import { Link } from "react-router-dom"
import AppleStoreLogo from "../../assets/AppleStoreLogo.png"
import GooglePlayLogo from "../../assets/GooglePlayLogo.png"
import * as S from "./styles"

const StoresLinks = () => {
    return (
        <S.Container>
            <Link to="#">
                <img src={AppleStoreLogo} alt="Disponível na AppStore" />
            </Link>
            <Link to="#">
                <img src={GooglePlayLogo} alt="Disponível no Google Play" />
            </Link>
        </S.Container>
    )
}

export default StoresLinks