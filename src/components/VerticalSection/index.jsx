import { useMemo } from "react"
import * as S from "./styles"

import CenouraImg from "../../assets/Cenoura.png"
import PimentaoImg from "../../assets/Pimentao.png"
import AbacaxiImg from "../../assets/Abacaxi.png"

const titles = {
    secondSectionHome: "Tenha produtos fresquinhos direto dos produtores familiares",
    fourthSectionHome: "Como funciona?",
}

const subtitles = {
    secondSectionHome: "Toda semana ou quinzena uma cesta com frutas, legumes e verduras agroecológicos, frescos e da estação entregues na sua casa.",
    fourthSectionHome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh ante, vestibulum a ligula eu, rutrum imperdiet velit.",
}

const imgSrcs = {
    secondSectionHome: [CenouraImg, PimentaoImg, AbacaxiImg],
    fourthSectionHome: ["", "", "", ""],
}

const imgsDescriptions = {
    secondSectionHome: [],
    fourthSectionHome: [
        <div className="img-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>,
        <div className="img-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>,
        <div className="img-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>,
        <div className="img-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>,
    ],
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
        <S.Container>
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