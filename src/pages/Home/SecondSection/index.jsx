import * as S from "./styles";
import imgSrc from "../../../assets/SecondSection.png";
import StoresLinks from "../../../components/StoresLinks";

const SecondSection = () => {
  return (
    <S.Container>
      <div className="left">
        <img src={imgSrc} alt="" />
      </div>
      <div className="right">
        <h3>Baixe o app e faça sua assinatura</h3>
        <StoresLinks />
      </div>
    </S.Container>
  );
};

export default SecondSection;
