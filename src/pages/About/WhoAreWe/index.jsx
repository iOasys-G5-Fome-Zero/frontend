import * as S from "./styles"
import FirstImage from "../../../assets/WhoAreWe/WhoAreWe1.png"
import SecondImage from "../../../assets/WhoAreWe/WhoAreWe2.png"

const WhoAreWe = () => {
    return (
        <S.Container>
            <div className="left">
                <div className="img-container">
                    <img src={FirstImage} alt="" />
                </div>
                <div className="img-container">
                    <img src={SecondImage} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Quem somos nós?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris nibh ante, vestibulum a ligula eu, rutrum imperdiet
                    velit. Vestibulum blandit massa risus, et semper libero
                    mollis sed. Proin tristique posuere maximus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris nibh ante, vestibulum a ligula eu, rutrum imperdiet
                    velit. Vestibulum blandit massa risus, et semper libero
                    mollis sed. Proin tristique posuere maximus.
                </p>
            </div>
        </S.Container>
    )
}

export default WhoAreWe