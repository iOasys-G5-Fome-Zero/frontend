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
            <h3>
            Emília Nascimento
            </h3>
            <p>
            Produtora familiar
            </p>
        </>,
        <>
            <h3>
            Celso Freitas
            </h3>
            <p>
            Produtor familiar
            </p>
        </>,
        <>
            <h3>
            Maria Rosa
            </h3>
            <p>
            Produtora familiar
            </p>
        </>,
        <>
            <h3>
            José da Silva
            </h3>
            <p>
            Produtor familiar
            </p>
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
            <h1>
                {titles[name]}
            </h1>
            <div className="subtitle">
                {subtitles[name]}
            </div>
            <div className="images">
                {imgsComponents}
            </div>
        </S.Container>
    )
}

export default VerticalSection