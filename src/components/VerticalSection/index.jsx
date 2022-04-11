import { useMemo } from "react"
import * as S from "./styles"
import CenouraImg from "../../assets/Cenoura.png"
import PimentaoImg from "../../assets/Pimentao.png"
import AbacaxiImg from "../../assets/Abacaxi.png"
import EmiliaImg from "../../assets/Produtores/Emilia.png"
import CelsoImg from "../../assets/Produtores/Celso.png"
import MariaImg from "../../assets/Produtores/Maria.png"
import JoseImg from "../../assets/Produtores/Jose.png"
import InstitutionsImg1 from "../../assets/Institutions/InstitutionsImg1.png"
import InstitutionsImg2 from "../../assets/Institutions/InstitutionsImg2.png"
import useCarousel from "../../hooks/useCarousel/useCarousel"

const titles = {
    secondSectionHome: "Tenha produtos fresquinhos direto dos produtores familiares",
    producers: "Produtores",
    institutions: "Instituições beneficiadas",
}

const subtitles = {
    secondSectionHome: "Toda semana ou quinzena uma cesta com frutas, legumes e verduras agroecológicos, frescos e da estação entregues na sua casa.",
    producers: "Conheça nossos produtores credenciados, são eles que produzem e levam o alimento até a sua mesa. Assinando com o Cestou você fortalece a produção de pequenos produtores da sua região e recebe alimentos frescos e cultivados com muito carinho e cuidado.",
    institutions: "Veja abaixo as instituições e projetos cadastrados na nossa rede e ajude-os a atingir a meta do mês doando suas moedas que serão convertidas em alimentos para pessoas em situação de fome."
}

const imgSrcs = {
    secondSectionHome: [CenouraImg, PimentaoImg, AbacaxiImg],
    producers: [EmiliaImg, CelsoImg, MariaImg, JoseImg],
    institutions: [InstitutionsImg1, InstitutionsImg2],
}

const imgsDescriptions = {
    secondSectionHome: [],
    producers: [
        <>
            <h5 className="semibold">
            Emília Nascimento
            </h5>
            <h6>
            Produtora familiar
            </h6>
        </>,
        <>
            <h5 className="semibold">
            Celso Freitas
            </h5>
            <h6>
            Produtor familiar
            </h6>
        </>,
        <>
            <h5 className="semibold">
            Maria Rosa
            </h5>
            <h6>
            Produtora familiar
            </h6>
        </>,
        <>
            <h5 className="semibold">
            José da Silva
            </h5>
            <h6>
            Produtor familiar
            </h6>
        </>,
    ],
    institutions: [
        <div className="institutions-description">
            A ONG Comida Na Mesa leva o alimento para quem mais precisa através de mapeamento das pessoas em situação de fome e doação de alimentos para famílias carentes.
        </div>,
        <div className="institutions-description">
        A ONG Criança sem fome preza pela saúde e alimentação das crianças em risco de fome, dando suporte para as famílias, creches e escolas para alcançar o maior número de crianças possível.
        </div>
    ]
}

const VerticalSection = ({ name }) => {

    const { indicators, handleScroll } = useCarousel(imgSrcs[name].length)

    const imgsComponents = useMemo(() => {
        return imgSrcs[name].map((src, index) => {
            console.log(src)
            return (
                <div className="image-and-description" key={index}>
                    <div className="img-container">
                        <img src={src} alt="" />
                    </div>
                    {imgsDescriptions[name][index] || ""}
                </div>
            )
        })
    }, [name])

    return (
        <S.Container narrow={name === "institutions"}>
            <h2>{titles[name]}</h2>
            <h5 className="subtitle">{subtitles[name]}</h5>
            <div className="images-wrapper">
                <div className="images" onScroll={handleScroll}>{imgsComponents}</div>
            </div>
            <div className="indicators-container">
                {indicators}
            </div>
        </S.Container>
    )
}

export default VerticalSection