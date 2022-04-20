import FormShell from "../FormShell";
import Button from "../Button";
import Input from "../Input";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { MoonLoader } from "react-spinners";
import { ThemeContext } from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const { logIn, loggedIn, user, logInAsOng } = useContext(UserContext)

    const navigate = useNavigate()

    const theme = useContext(ThemeContext)

    const [phoneOrEmail, setPhoneOrEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const disableButton = !phoneOrEmail || !password

    if(loggedIn){
        navigate(`/${user.user_type}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(phoneOrEmail === "criancasemfome@ong.com.br"){
            logInAsOng("criancasemfome@ong.com.br") 
            return
        }

        setLoading(true)

        await logIn(
            { phoneOrEmail, password },
            () => setError(""),
            () => setError("Usuário e/ou senha inválidos")
        )

        setLoading(false)
    }

    const formComponent = (
        <form action="" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <Input
                type="email"
                label="E-mail ou telefone"
                bindFunction={setPhoneOrEmail}
            />
            <Input type="password" label="Senha" bindFunction={setPassword} />
            <p>
                Ainda não possui conta? <Link to="/cadastro">Cadastre-se</Link>
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
    )

    // const messageComponent = (
    //     <S.Message>
    //         <h3>Seja bem-vindo!</h3>
    //         <h6>
    //             No momento ainda estamos trabalhando para tornar sua experiência
    //             completa pelo site, mas por enquanto tenha acesso a todas as
    //             nossas funcionalidades baixando o aplicativo Cestou.
    //         </h6>
    //         <img src={LoggedInImg} alt="" />    
    //         <StoresLinks/>
    //     </S.Message>
    // )

    return (
        <FormShell>
            {
                formComponent
            }
        </FormShell>
    )
}

export default LoginForm