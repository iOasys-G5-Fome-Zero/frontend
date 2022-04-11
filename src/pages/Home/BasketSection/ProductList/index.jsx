import * as S from "./styles"
import { upperCaseFirstLetter } from "../../../../utils"
import { useState, useMemo } from "react"

const products = {
    frutos: ["500g de maçã", "500g de banana", "250g de uvas", "500g de laranja", "500g de ameixa", "250g de acerola"],
    verduras: ["1 pé de alface", "1 maço de rúcula", "1 pé de brócolis", "Couve", "Salsinha", "Taioba"],
    legumes: ["500g de tomate", "400g de abóbora", "400g de cebola", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    temperos: ["Salsa", "Alho", "Manjericão", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
}


const ProductList = ({ type }) => {

    const [limit, setLimit] = useState(3)

    const productsArray = products[type]

    const productsItems = useMemo(() => {
        return productsArray.map((product, index) => {
            return (
                <li key={index}>
                    {product}
                </li>
            )
        }).slice(0, limit)
    }, [limit, productsArray])

    return (
        <S.Container>
            <div className="left">
                <div className="pic-container"></div>
            </div>
            <div className="right">
                <div className="product-type">
                    {upperCaseFirstLetter(type)}
                </div>
                <ul>
                    {productsItems}
                </ul>
                <button className="expand" onClick={() => setLimit(limit + 3)} disabled={limit > productsArray.length}>
                    Ver mais exemplos
                </button>
            </div>
        </S.Container>
    )
}

export default ProductList