import * as S from "./styles"
import { upperCaseFirstLetter } from "../../../../utils"
import { useState, useMemo } from "react"

const products = {
    frutos: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    verduras: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    legumes: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    processados: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
}


const ProductList = ({ type }) => {

    const [limit, setLimit] = useState(3)

    const productsArray = products[type]

    const productsItems = useMemo(() => {
        return productsArray.map(product => {
            return (
                <li>
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
                <h4>
                    {upperCaseFirstLetter(type)}
                </h4>
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