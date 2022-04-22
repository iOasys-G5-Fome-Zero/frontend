import * as S from "./styles";
import { useMemo } from "react";
import InstitutionsImg1 from "../../../assets/Institutions/InstitutionsImg1.png";
import InstitutionsImg2 from "../../../assets/Institutions/InstitutionsImg2.png";
import MobileCarousel from "../../../components/MobileCarousel";

const descriptions = [
  <div className="institutions-description">
    A ONG Comida Na Mesa leva o alimento para quem mais precisa através de
    mapeamento das pessoas em situação de fome e doação de alimentos para
    famílias carentes.
  </div>,
  <div className="institutions-description">
    A ONG Criança Sem Fome preza pela saúde e alimentação das crianças em risco
    de fome, dando suporte para as famílias, creches e escolas para alcançar o
    maior número de crianças possível.
  </div>,
];

const images = [InstitutionsImg1, InstitutionsImg2];

const InstitutionsSection = () => {
  const imgsComponents = useMemo(() => {
    return images.map((src, index) => {
      return (
        <div className="image-and-description" key={index}>
          <div className="img-container">
            <img src={src} alt="" />
          </div>
          {descriptions[index] || ""}
        </div>
      );
    });
  }, []);

  return (
    <S.Container>
      <h2>Instituições beneficiadas</h2>
      <h5>
        Propomos através de parcerias públicas (CRAS) e privadas (ONGS) que
        atuam diretamente no combate a fome, a finalidade de subsidiar a doação
        de alimentos para essas instituições. Além disso também é uma forma de
        incentivo à alimentação saudável e sustentável através do consumo de
        produtos agroecológicos produzidos por esses agricultores que cuidam com
        muito carinho desses alimentos.
      </h5>
      <h5>
        Veja abaixo as instituições e projetos cadastrados na nossa rede e
        ajude-os a atingir a meta do mês doando suas moedas que serão
        convertidas em alimentos para pessoas em situação de fome.
      </h5>
      <div className="images">{imgsComponents}</div>
      <div className="mobile">
        <MobileCarousel>{imgsComponents}</MobileCarousel>
      </div>
    </S.Container>
  );
};

export default InstitutionsSection;
