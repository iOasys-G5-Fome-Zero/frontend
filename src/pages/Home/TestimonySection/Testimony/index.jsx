import * as S from "./styles";

const statements = [
  "Depois que me tornei produtor parceiro da Cestou minhas vendas aumentaram bastante. Agora toda semana sei que terei para quem vender por causa dos assinantes.",
  "Com a Cestou pude me conectar mais a comunidade local, e hoje tenho clientes fixos e próximos a mim. E saber que meu trabalho está ajudando pessoas em situação de fome é um incentivo muito grande.",
  "Sempre busquei consumir produtos saudáveis, de qualidade, e sustentáveis, pelo bem estar e saúde da minha família. Com a assinatura da Cestou pude conciliar a facilidade de acesso a esses alimentos e ainda contribuir para pessoas que estão em vulnerabilidade alimentar.",
  "Tenho um estilo de vida bem agitado, e a Cestou me ajuda a conciliar esse estilo de vida com a possibilidade de contribuir por uma causa, que é ajudar no combate a fome. Além disso prezo muito pela minha saúde e saber de onde esses alimentos vem é muito importante.",
];

const names = [
  "Celso Freitas",
  "Emília Nescimento",
  "Márcia de Freitas",
  "Ernesto Campos",
];

const occupations = [
  "Produtor",
  "Produtora familiar",
  "Consumidora",
  "Consumidor",
];

const Testimony = ({ right, index }) => {
  return (
    <S.Container right={right}>
      <div className="testimony">
        <div className="text">
          <div className="opinion">{statements[index]}</div>
          <div className="producer-name">{names[index]}</div>
          <span>{occupations[index]}</span>
        </div>
      </div>
    </S.Container>
  );
};

export default Testimony;
