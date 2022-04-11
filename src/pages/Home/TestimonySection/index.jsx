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
                <h2>
                    Depoimentos
                </h2>
                <Testimony index={0}/>
                <Testimony index={1}/>
            </div>
            <div className="right-testimonies">
                <Testimony right={true} index={2}/>
                <Testimony right={true} index={3}/>
            </div>
        </S.Container>
    )
}

export default TestimonySection