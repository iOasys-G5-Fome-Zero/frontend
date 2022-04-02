import * as S from "./styles"
import quoteSrc from "../../../assets/Quotes.svg"
import Testimony from "./Testimony"

const TestimonySection = () => {
    return (
        <S.Container>
            <div className="quotes">
                <img src={quoteSrc} alt="quotes" />
            </div>
            <div className="left-testimonies">
                <h1>
                    Depoimentos
                </h1>
                <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <Testimony/>
                <Testimony/>
            </div>
            <div className="right-testimonies">
                <Testimony right={true}/>
                <Testimony right={true}/>
            </div>
        </S.Container>
    )
}

export default TestimonySection