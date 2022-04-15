
import FormShell from "../FormShell";
import * as S from "./styles";
import Button from "../Button";
import Input from "../Input";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { ThemeContext } from "styled-components";


function splitName(name){
    const index = name.indexOf(' ')
    return [name.slice(0, index), name.slice(index)]
}


const SignUpForm = () => {
    
    const { signUp } = useContext(UserContext)

    const theme = useContext(ThemeContext)
    
    const [checkedRadio, setCheckedRadio] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const disableButton = !(checkedRadio && name && email && phone && password)

    const handleSubmit = async e => {
        e.preventDefault()

        if(checkedRadio === "institution")
            return

        const [firstName, lastName] = splitName(name)

        setLoading(true)
        await signUp({
            firstName,
            lastName,
            userType: checkedRadio,
            phone: phone.replace(/\D/g, ''), // removing everything that isn't a number
            password,
            email
        }, () => setError("Não foi possível criar a sua conta"))
        setLoading(false)
    }

    return (
        <FormShell>
            <form action="" onSubmit={handleSubmit}>
                <h3>Criar conta</h3>
                <Input
                    type="text"
                    label="Nome da Instituição"
                    bindFunction={setName}
                />
                <Input
                    type="tel"
                    label="Telefone de contato"
                    bindFunction={setPhone}
                />
                <Input type="email" label="E-mail" bindFunction={setEmail} />
                <Input
                    type="password"
                    label="Senha"
                    bindFunction={setPassword}
                    obs="Sua senha deve ter entre 8 e 50 caracteres e deve conter pelo menos uma letra maiúscula e um caractere especial"
                />
                <p>
                    Já possui cadastro? <Link to="/login">Faça Login</Link>
                </p>
                <p className="radios-description">
                    Selecione qual tipo de cadastro deseja realizar:
                </p>
                <S.RadioContainer>
                    <input
                        type="radio"
                        onChange={() => setCheckedRadio("producer")}
                        checked={checkedRadio === "producer"}
                    />
                    <label htmlFor="">Produtor</label>
                </S.RadioContainer>
                <S.RadioContainer>
                    <input
                        type="radio"
                        onChange={() => setCheckedRadio("consumer")}
                        checked={checkedRadio === "consumer"}
                    />
                    <label htmlFor="">Consumidor</label>
                </S.RadioContainer>
                <S.RadioContainer>
                    <input
                        type="radio"
                        onChange={() => setCheckedRadio("institution")}
                        checked={checkedRadio === "institution"}
                    />
                    <label htmlFor="">Instituição parceira</label>
                </S.RadioContainer>
                <p className="obs">
                    Obs: Caso você seja uma instituição que atue no combate a
                    fome, e queira participar do nosso programa de recebimento
                    de doações, preencha a cadastro acima e selecione a opção
                    “Instituição parceira”. Em seguida entraremos em contato
                    para solicitar demais informações.
                </p>
                <div className="loader">
                    <MoonLoader
                        color={theme.colors.primary.dark}
                        size={loading ? 40 : 0}
                    />
                </div> 
                <p className="error">{error}</p>
                <Button type="submit" disabled={disableButton}>
                    Cadastre-se
                </Button>
            </form>
        </FormShell>
    )
}

export default SignUpForm