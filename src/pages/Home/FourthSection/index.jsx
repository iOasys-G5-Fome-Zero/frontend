import { useMemo } from "react"
import * as S from "./styles"
import Topic from "./Topic"
import ImgSrc from "../../../assets/FourthPanel.png"

const indexes = [1, 2, 3, 4, 5]

const FourthSection = () => {
    const topicComponents = useMemo(() => {
        return indexes.map(index => {
            return <Topic index={index} key={index}/>
        })
    }, [])

    return (
        <S.Container>
            <h2>Como funciona?</h2>
            <h5 className="subtitle">
                Se houver algum item que você não queira receber na semana, você
                tem a opção de convertê-lo em Horticoins (nossa moeda verde) e
                nós repassaremos para ONG's e Instituições parceiras, de acordo
                com suas necessidades, evitando o desperdício desses alimentos.
                Ou seja, você também faz parte desse processo de combate à fome.
            </h5>
            <div className="main-content">
                <ul className="topics">{topicComponents}</ul>
                <div className="img-container">
                    <img src={ImgSrc} alt="" />
                </div>
            </div>
            <h5>
                Além dos ingredientes para abastecer sua despensa, estamos
                sempre à procura de frutas, legumes e verduras da estação
                diferentes dos convencionais. Em alguns períodos temos a
                possibilidade de adquirir alimentos processados de forma
                artesanal também e você poderá desfrutar de geleias, bolos e
                alimentos feitos com a certeza da qualidade caseira: com
                gostinho de lanche da vovó.
            </h5>
        </S.Container>
    )
}

export default FourthSection