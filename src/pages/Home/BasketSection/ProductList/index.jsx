import * as S from "./styles";
import { upperCaseFirstLetter } from "../../../../utils";
import { useState, useMemo } from "react";
import AppleImg from "../../../../assets/Apple.png";
import CarrotsImg from "../../../../assets/Carrots.png";
import LettuceImg from "../../../../assets/Lettuce.png";
import SeasoningImg from "../../../../assets/Seasoning.png";

const imgs = {
  frutas: AppleImg,
  verduras: LettuceImg,
  legumes: CarrotsImg,
  temperos: SeasoningImg,
};

const products = {
  frutas: [
    "500g de maçã",
    "500g de banana",
    "250g de uvas",
    "500g de laranja",
    "500g de ameixa",
    "250g de acerola",
  ],
  verduras: [
    "1 pé de alface",
    "1 maço de rúcula",
    "1 pé de brócolis",
    "Couve",
    "Salsinha",
    "Taioba",
  ],
  legumes: [
    "500g de tomate",
    "400g de abóbora",
    "400g de cebola",
    "500g de pimentão",
    "400g de alcachofra",
    "500g de ervilha",
  ],
  temperos: [
    "Salsa",
    "Alho",
    "Manjericão",
    "Pimenta",
    "Açafrão",
    "Cheiro Verde",
  ],
};

const ProductList = ({ type }) => {
  const [limit, setLimit] = useState(3);

  const productsArray = products[type];

  const productsItems = useMemo(() => {
    return productsArray.map((product, index) => {
      return (
        <li key={index} className={index >= limit ? "hidden" : ""}>
          {product}
        </li>
      );
    });
  }, [limit, productsArray]);

  return (
    <S.Container>
      <div className="left">
        <div className="pic-container">
          <img src={imgs[type]} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="product-type">{upperCaseFirstLetter(type)}</div>
        <ul>{productsItems}</ul>
        {limit >= productsArray.length ? (
          ""
        ) : (
          <button className="expand" onClick={() => setLimit(limit + 3)}>
            Ver mais exemplos
          </button>
        )}
      </div>
    </S.Container>
  );
};

export default ProductList;
