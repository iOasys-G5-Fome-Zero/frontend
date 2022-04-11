import * as S from "./styles"
import SignUpBackground from "../../assets/SignUpBackground.png"
import Input from "../Input"
import { Link } from "react-router-dom"
import { useState } from "react"

const LoginOrSignUpForm = ({ login }) => {
    const [checkedRadio, setCheckedRadio] = useState("")

    return (
        <S.Container bkgSrc={SignUpBackground}>
            <form action="">
                <h3>{login ? "Login" : "Criar uma conta"}</h3>

                {login ? null : (
                    <Input type="text" label="Nome da Instituição" />
                )}

                <Input type="email" label="E-mail" />
                <Input type="password" label="Senha" />

                {login ? (
                    <p>
                        Ainda não possui conta?{" "}
                        <Link to="/cadastro">Cadastre-se</Link>
                    </p>
                ) : (
                    <p>
                        Já possui cadastro? <Link to="/login">Faça Login</Link>
                    </p>
                )}

                {!login ? (
                    <>
                        <p className="radios-description">
                            Selecione qual tipo de cadastro deseja realizar:
                        </p>
                        <S.RadioContainer>
                            <input
                                type="radio"
                                onChange={() => setCheckedRadio("produtor")}
                                checked={checkedRadio === "produtor"}
                            />
                            <label htmlFor="">Produtor</label>
                        </S.RadioContainer>
                        <S.RadioContainer>
                            <input
                                type="radio"
                                onChange={() => setCheckedRadio("consumidor")}
                                checked={checkedRadio === "consumidor"}
                            />
                            <label htmlFor="">Consumidor</label>
                        </S.RadioContainer>
                        <S.RadioContainer>
                            <input
                                type="radio"
                                onChange={() => setCheckedRadio("instituicao")}
                                checked={checkedRadio === "instituicao"}
                            />
                            <label htmlFor="">Instituição parceira</label>
                        </S.RadioContainer>
                        <p className="obs">
                            Obs: Caso você seja uma instituição que atue no
                            combate a fome, e queira participar do nosso
                            programa de recebimento de doações, preencha a
                            cadastro acima e selecione a opção “Instituição
                            parceira”. Em seguida entraremos em contato para
                            solicitar demais informações.
                        </p>
                    </>
                ) : null}
                <button type="submit">{login ? "Login" : "Cadastre-se"}</button>
            </form>
        </S.Container>
    )
}

export default LoginOrSignUpForm