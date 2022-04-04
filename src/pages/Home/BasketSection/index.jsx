import * as S from "./styles"
import ProductList from "./ProductList"
import ImgSrc from "../../../assets/BasketSectionImg.png"

const BasketSection = () => {
    return (
        <S.Container bkgSrc={ImgSrc}>
            <div className="basket-content">
                <h1>
                O que vem na sua cesta?
                </h1>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh ante, vestibulum a ligula eu, rutrum imperdiet.
                </div>
                <div className="products-container">
                <ProductList type="frutos"/>
                <ProductList type="verduras"/>
                <ProductList type="legumes"/>
                <ProductList type="processados"/>
                </div>
            </div>
        </S.Container>
    )
}

export default BasketSection