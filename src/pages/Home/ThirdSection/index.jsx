import FirstSection from "../FirstSection"
import * as S from "./styles"

const ThirdSection = () => {
    return (
        <S.Container>
            <div className="left">
                <h1>
                Ajude instituições e ONG’s que atuam no combate a fome
                </h1>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh ante, vestibulum a ligula eu, rutrum imperdiet velit. Vestibulum blandit massa risus, et semper libero mollis sed. Proin tristique posuere maximus. 
                </div>
            </div>
            <div className="right">
                <div className="img-container"></div>
            </div>
        </S.Container>
    )
}

export default ThirdSection