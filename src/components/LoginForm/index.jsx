import FormShell from "../FormShell";
import Button from "../Button";
import Input from "../Input";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { MoonLoader } from "react-spinners";
import { ThemeContext } from "styled-components";

const LoginForm = () => {

    const { logIn } = useContext(UserContext)

    const theme = useContext(ThemeContext)

    console.log(theme.colors.primary.dark)

    const [phoneOrEmail, setPhoneOrEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const disableButton = !phoneOrEmail || !password

    const handleSubmit = async e => {
        e.preventDefault()
        
        setLoading(true)

        await logIn(
            { phoneOrEmail, password },
            () => setError(""),
            () => setError("Usuário e/ou senha inválidos")
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