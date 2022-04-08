import * as S from "./styles"
import ImgSrc from "../../../assets/ONGWelcome.png"

const WelcomeSection = () => {
    return (
        <S.Container>
            <div className="left">
                <h1>Seja bem vinda ONG Criança Sem fome</h1>
                <p>Estamos felizes que você completou o seu cadastro conosco e foi aprovada para ser uma de nossas instituições beneficiadas.</p>
            </div>
            <div className="right">
                <img src={ImgSrc} alt="" />
            </div>
        </S.Container>
    )
}

export default WelcomeSection