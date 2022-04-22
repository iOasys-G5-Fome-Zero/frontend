import useCarousel from "../../hooks/useCarousel/useCarousel";
import * as S from "./styles"

const MobileCarousel = ({ children }) => {

    const { handleScroll, indicators } = useCarousel(children.length)

    return (
        <S.Carousel>
            <div className="wrapper">
                <div className="carousel" onScroll={handleScroll}>
                    {children}
                </div>
            </div>
            <div className="indicators">{indicators}</div>
        </S.Carousel>
    )
}

export default MobileCarousel