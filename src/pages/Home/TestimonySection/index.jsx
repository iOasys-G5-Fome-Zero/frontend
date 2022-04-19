import * as S from "./styles"
import quoteSrc from "../../../assets/Quotes.svg"
import Testimony from "./Testimony"
import useCarousel from "../../../hooks/useCarousel/useCarousel"
import { useRef } from "react"
import Invite from "../../../components/Inivite"

const TestimonySection = () => {

    const scrollRef = useRef()

    const { indicators, handleScroll } = useCarousel(4)


    return (
        <S.Container>
            <div className="desktop">
                <div className="quotes">
                    <img src={quoteSrc} alt="quotes" />
                </div>
                <div className="left-testimonies">
                    <h2>Depoimentos</h2>
                    <Testimony index={0} />
                    <Testimony index={1} />
                </div>
                <div className="right-testimonies">
                    <Testimony right={true} index={2} />
                    <Testimony right={true} index={3} />
                </div>
            </div>
            <div className="mobile" ref={scrollRef}>
                <h2>Depoimentos</h2>
                <div className="testimonies-carousel" onScroll={handleScroll}>
                    <Testimony index={0} />
                    <Testimony index={1} />
                    <Testimony index={2} />
                    <Testimony index={3} />
                </div>
                <div className="indicators-container">
                    {indicators}
                </div>
            </div>
            <Invite title="Deseja fazer parte?" path="/cadastro"/>
        </S.Container>
    )
}

export default TestimonySection