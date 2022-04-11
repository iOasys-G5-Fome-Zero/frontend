import { useMemo } from "react"
import * as S from "./styles"
import Topic from "./Topic"
import ImgSrc from "../../../assets/FourthPanel.png"

const indexes = [1, 2, 3, 4]

const FourthSection = () => {
    const topicComponents = useMemo(() => {
        return indexes.map(index => {
            return <Topic index={index}/>
        })
    }, [])

    return (
        <S.Container>
            <h2>
            Como funciona?
            </h2>
            <h5 className="subtitle">
            Aqui no Cestou você faz a diferença! Caso não queira receber todos os alimentos da semana você tem a opção de convertê-los em Horticoins (nossa moeda verde), que é repassada para as ONG’s e instituições que atuam no ccombate à fome.
            </h5>
            <div className="main-content">
                <ul className="topics">
                    {topicComponents}
                </ul>
                <div className="img-container">
                    <img src={ImgSrc} alt="" />
                </div>
            </div>
        </S.Container>
    )
}

export default FourthSection