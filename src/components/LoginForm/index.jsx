import FormShell from "../FormShell";
import Button from "../Button";
import Input from "../Input";
import * as S from "./styles"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { MoonLoader } from "react-spinners";
import { ThemeContext } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
    const { logIn, loggedIn, user, logInAsOng } = useContext(UserContext)

    const navigate = useNavigate()

    const theme = useContext(ThemeContext)

    const [phoneOrEmail, setPhoneOrEmail] = useState("")
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [keepLogged, setKeepLogged] = useState(false)

    const disableButton = !phoneOrEmail || !password

    if (loggedIn) {
        navigate(`/${user.user_type}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (phoneOrEmail === "criancasemfome@ong.com.br") {
            logInAsOng("criancasemfome@ong.com.br")
            return
        }

        setLoading(true)

        await logIn(
            { phoneOrEmail, password },
            () => setError(""),
            () => setError("Usuário e/ou senha inválidos"),
            keepLogged
        )

        setLoading(false)
    }

    return (
        <FormShell>
            <form action="" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Input
                    type="email"
                    label="E-mail ou telefone"
                    bindFunction={setPhoneOrEmail}
                />
                <Input
                    type="password"
                    label="Senha"
                    bindFunction={setPassword}
                />
                <S.Checkmark checked={keepLogged}>
                    <div className="checkbox-container">
                        <button className="checkmark" type="button" onClick={() => setKeepLogged(!keepLogged)}>
                            <FontAwesomeIcon icon={faSquareCheck} />
                        </button>
                    </div>
                    <label htmlFor="keepLoggedIn">Me manter conectado</label>
                </S.Checkmark>
                <p>
                    Ainda não possui conta?{" "}
                    <Link to="/cadastro">Cadastre-se</Link>
                </p>

                <div className="loader">
                    <MoonLoader
                        color={theme.colors.primary.dark}
                        size={loading ? 40 : 0}
                    />
                </div>
                <p className="error">{error}</p>
                <Button type="submit" disabled={disableButton}>
                    Login
                </Button>
            </form>
        </FormShell>
    )
}

export default LoginForm