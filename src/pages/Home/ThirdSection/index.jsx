
import * as S from "./styles"
import ImgSrc from "../../../assets/ThirdPanel.png"

const ThirdSection = () => {
    return (
        <S.Container>
            <div className="left">
                <h3>
                Ajude instituições e ONG’s que atuam no combate a fome
                </h3>
                <h5 className="description">
                Doando os alimentos da sua cesta você gera moedas Horticoins que são destinadas a projetos e instituições que atuam no combate à fome.  Conheça mais sobre cada projeto e como você pode fazer a diferença.                </h5>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={ImgSrc} alt="" />
                </div>
            </div>
        </S.Container>
    )
}

export default ThirdSection