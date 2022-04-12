import * as S from "./styles"
import ProductList from "./ProductList"


const BasketSection = () => {
    return (
        <S.Container >
            <div className="basket-content">
                <h2>
                O que vem na sua cesta?
                </h2>
                <h5 className="description">
                Veja abaixo quais os tipos de alimentos que podem vir na sua cesta, a cada semana temos uma variedade diferente de alimentos para compor a sua mesa.                </h5>
                <div className="products-container">
                <ProductList type="frutos"/>
                <ProductList type="verduras"/>
                <ProductList type="legumes"/>
                <ProductList type="temperos"/>
                </div>
            </div>
        </S.Container>
    )
}

export default BasketSection