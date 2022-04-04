import StoresLinks from "../../../components/StoresLinks"
import * as S from "./styles"
import backgroundImg from "../../../assets/FirstPanel.png"

const FirstSection = () => {
    return (
        <S.Container bkgSrc={backgroundImg}>
            <div className="left">
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <StoresLinks />
            </div>
        </S.Container>
    )
}

export default FirstSection