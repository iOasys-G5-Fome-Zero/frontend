import * as S from "./styles"
import quoteSrc from "../../../../assets/BlackQuotes.svg"

const Testimony = ({ right }) => {
    return (
        <S.Container right={right}>
            <div className="testimony">
                <div className="small-quotes">
                    <img src={quoteSrc} alt="" />
                </div>
                <div className="text">
                    <div className="opinion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh ante, vestibulum a ligula eu, rutrum imperdiet velit. Vestibulum blandit massa risus, et semper libero mollis sed. Proin tristique posuere maximus. Maecenas consequat ligula ligula, et pretium mi scelerisque eu.
                    </div>
                    <h4>
                        Nome do Produtor
                    </h4>
                    <span>
                        Produtor
                    </span>
                </div>
            </div>
        </S.Container>
    )
}

export default Testimony