import { useMemo } from "react"
import * as S from "./styles"

const titles = {
    secondSectionHome: "Tenha produtos fresquinhos direto dos produtores familiares",
}

const subtitles = {
    secondSectionHome: "Toda semana ou quinzena uma cesta com frutas, legumes e verduras agroecológicos, frescos e da estação entregues na sua casa.",
}

const imgSrcs = {
    secondSectionHome: ["", "", ""],
}


const VerticalSection = ({ name }) => {

    const imgsComponents = useMemo(() => {
        return imgSrcs[name].map(src => {
            return <div className="img-container" >
                <img src={src} alt=""/>
            </div>
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