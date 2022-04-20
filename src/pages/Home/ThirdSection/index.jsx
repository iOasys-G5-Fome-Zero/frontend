
import * as S from "./styles"
import ImgSrc from "../../../assets/ThirdSectionHome1.png"
import ImgSrc2 from "../../../assets/ThirdSectionHome2.png"

const ThirdSection = () => {
    return (
        <S.Container>
            <div className="left">
                <h2>Ajude instituições e ONG’s que atuam no combate a fome</h2>
                <h5 className="description">
                    Doando os alimentos da sua cesta você gera moedas Horticoins
                    que são destinadas a projetos e instituições que atuam no
                    combate à fome. Conheça mais sobre cada projeto e como você
                    pode fazer a diferença.
                </h5>
                <h5>
                    No Cestou, você colhe e semeia esse plantio! Se houver algum
                    item que você não queira receber na semana, você tem a opção
                    de convertê-lo em Horticoins (nossa moeda verde) e nós
                    repassaremos para ONG's e Instituições parceiras, de acordo
                    com suas necessidades, evitando o desperdício desses
                    alimentos. Ou seja, você também faz parte desse processo de
                    combate à fome.
                </h5>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={ImgSrc} alt="" />
                </div>
                <div className="img-container">
                    <img src={ImgSrc2} alt="" />
                </div>
            </div>
        </S.Container>
    )
}

export default ThirdSection