import { Link } from "react-router-dom";
import AppleStoreLogo from "../../assets/AppleStoreEng.png";
import GooglePlayLogo from "../../assets/GooglePlayEng.png";
import * as S from "./styles";

const StoresLinks = ({ vertical }) => {
  return (
    <S.Container vertical={vertical}>
      <Link to="/stores">
        <img src={AppleStoreLogo} alt="Disponível na AppStore" />
      </Link>
      <Link to="/stores">
        <img src={GooglePlayLogo} alt="Disponível no Google Play" />
      </Link>
    </S.Container>
  );
};

export default StoresLinks;
