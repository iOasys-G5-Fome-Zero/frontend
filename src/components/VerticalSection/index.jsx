import { useMemo } from "react"
import * as S from "./styles"

const titles = {
    secondSectionHome: "Tenha produtos fresquinhos direto dos produtores familiares",
    fourthSectionHome: "Como funciona?",
}

const subtitles = {
    secondSectionHome: "Toda semana ou quinzena uma cesta com frutas, legumes e verduras agroecológicos, frescos e da estação entregues na sua casa.",
    fourthSectionHome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh ante, vestibulum a ligula eu, rutrum imperdiet velit.",
}

const imgSrcs = {
    secondSectionHome: ["", "", ""],
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
            return (
                <div className="image-and-description">
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