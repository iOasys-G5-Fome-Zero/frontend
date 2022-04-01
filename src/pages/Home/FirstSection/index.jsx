import StoresLinks from "../../../components/StoresLinks"
import * as S from "./styles"

const FirstSection = () => {
    return (
        <S.Container>
            <div className="left">
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <StoresLinks/>
            </div>
            <div className="right">
                <div className="img-container"></div>
            </div>
        </S.Container>
    )
}

export default FirstSection