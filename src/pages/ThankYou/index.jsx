import * as S from "./styles";
import Layout from "../../components/Layout";
import FormShell from "../../components/FormShell";
import signedUpImg from "../../assets/SuccessfulSignUp.png";

const ThankYou = () => {
  return (
    <Layout>
      <FormShell>
        <S.Message>
          <h3>Cadastro realizado com sucesso!</h3>
          <h6>
            Você receberá uma confirmação por e-mail e também solicitaremos mais
            alguns dados para validar seu cadastro caso seja uma instituição ou
            ONG que atua no combate a fome.
          </h6>
          <img src={signedUpImg} alt="" />
        </S.Message>
      </FormShell>
    </Layout>
  );
};

export default ThankYou;
