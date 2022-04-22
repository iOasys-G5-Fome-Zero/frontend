import * as S from "./styles";
import FirstImage from "../../../assets/WhoAreWe/WhoAreWe1.png";
import SecondImage from "../../../assets/WhoAreWe/WhoAreWe2.png";

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
        <h2>Nosso objetivo</h2>
        <h5>
          Incentivamos a agricultura artesanal e orgânica em apoio à pequenos e
          médios produtores familiares que necessitam aumentar sua fonte de
          renda promovendo a participação social local na distribuição dos
          mesmos alimentos adquiridos na assinatura, à quem se encontra em
          situação de fome.
        </h5>
        <h5>
          Além da doação frequente, é possível a transferência de itens das
          cestas da assinatura para doação quando houver algum alimento
          integrado na cesta que não seja necessário na semana. Assim
          participamos de forma comunitária e colaborativa em prol da dignidade
          pra quem necessita. É uma mão plantando e cultivando, e outras
          recebendo a colheita. E na realidade todos colhem!
        </h5>
      </div>
    </S.Container>
  );
};

export default WhoAreWe;
