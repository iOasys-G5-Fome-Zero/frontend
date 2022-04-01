import * as S from "./styles"
import ProductList from "./ProductList"

const BasketSection = () => {
    return (
        <S.Container>
            <div className="left-panel">
                <div className="img-container"></div>
            </div>
            <div className="right-panel">
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