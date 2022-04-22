import * as S from "./styles"
import EmiliaImg from "../../../assets/Produtores/Emilia.png"
import CelsoImg from "../../../assets/Produtores/Celso.png"
import MariaImg from "../../../assets/Produtores/Maria.png"
import JoseImg from "../../../assets/Produtores/Jose.png"
import { useMemo } from "react"
import useCarousel from "../../../hooks/useCarousel/useCarousel"
import MobileCarousel from "../../../components/MobileCarousel"

const descriptions = [
    <>
        <h5 className="semibold">Emília Nascimento</h5>
        <h6>Produtora familiar</h6>
    </>,
    <>
        <h5 className="semibold">Celso Freitas</h5>
        <h6>Produtor familiar</h6>
    </>,
    <>
        <h5 className="semibold">Maria Rosa</h5>
        <h6>Produtora familiar</h6>
    </>,
    <>
        <h5 className="semibold">José da Silva</h5>
        <h6>Produtor familiar</h6>
    </>,
]

const images = [EmiliaImg, CelsoImg, MariaImg, JoseImg]



const ProducersSection = () => {

    const { indicators, handleScroll } = useCarousel(images.length)

    const imgsComponents = useMemo(() => {
        return images.map((src, index) => {
            return (
                <div className="image-and-description" key={index}>
                    <div className="img-container">
                        <img src={src} alt="" />
                    </div>
                    {descriptions[index] || ""}
                </div>
            )
        })
    }, [])

    return (
        <S.Container>
            <h2>Produtores</h2>
            <h5>
                Conheça nossos produtores credenciados, são eles que produzem e
                levam o alimento até a sua mesa. Assinando com o Cestou você
                fortalece a produção de pequenos produtores da sua região e
                recebe alimentos frescos e cultivados com muito carinho e
                cuidado.
            </h5>
            <div className="images" onScroll={handleScroll}>
                {imgsComponents}
            </div>
            <div className="mobile">
                <MobileCarousel>{imgsComponents}</MobileCarousel>
            </div>
            <h5>
                Os produtos produzidos pelos agricultores familiares são
                especiais porque carregam a história de quem os produziu, o
                respeito pela natureza e, principalmente o esmero na escolha e
                beneficiamento dos ingredientes na alimentação diária de sua
                família. De família pra famílias!
            </h5>
        </S.Container>
    )
}

export default ProducersSection