
import FormShell from "../FormShell";
import * as S from "./styles";
import Button from "../Button";
import Input from "../Input";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { ThemeContext } from "styled-components";


function splitName(name){
    const index = name.indexOf(' ')
    if(index < 0)
        return [name, "Nenhum"]
    return [name.slice(0, index), name.slice(index + 1)]
}

const emailRegex = /.{1,}@{1}.{1,}\..{1,}/

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,50}$/


const SignUpForm = () => {
    
    const { signUp, loggedIn, user } = useContext(UserContext)

    const navigate = useNavigate()

    const theme = useContext(ThemeContext)
    
    const [checkedRadio, setCheckedRadio] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [invalidInputs, setInvalidInputs] = useState([])
    
    const disableButton = !(checkedRadio && name && email && phone && password)

    useEffect(() => {
        if (loggedIn) {
            navigate(`/${user.user_type || user.userType}`)
        }
    })
    
    const validateInputs = () => {

        let result = true

        const incorrectInputs = []

        if(phone.length < 10){
            setError()
            incorrectInputs.push(0)
            result = false
        }
        if(!emailRegex.test(email)){
            setError()
            incorrectInputs.push(1)
            result = false
        }
        if(!(password.length >= 6)){
            incorrectInputs.push(2)
            result = false
        }
        
        setInvalidInputs(incorrectInputs)

        return result
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (checkedRadio === "institution") return

        const [firstName, lastName] = splitName(name)
        
        if(!validateInputs()){
            setError("Preencha todos os campos corretamente para completar seu cadastro")
            return
        }

        setLoading(true)

        await signUp(
            {
                firstName,
                lastName,
                userType: checkedRadio,
                phone,
                password,
                email,
            },
            () => {
                navigate("/obrigado")
            },
            () => setError("Endereço de e-mail ou número de telefone já em uso")
        )

        setLoading(false)
    }

    const formComponent = (
        <form action="" onSubmit={handleSubmit}>
            <h3>Criar conta</h3>
            <Input
                type="text"
                label="Nome ou Instituição"
                bindFunction={setName}
            />
            <Input
                type="tel"
                label="Telefone de contato"
                bindFunction={(s) => setPhone(s.replace(/\D/g, ""))} // converting phone number from (XX)XXXX-XXXX format to XXXXXXXXXX
                invalid={invalidInputs.includes(0)}
                errorMessage="Favor inserir número de telefone válido"
            />
            <Input
                type="email"
                label="E-mail"
                bindFunction={setEmail}
                invalid={invalidInputs.includes(1)}
                errorMessage="Favor inserir endereço de e-mail válido"
            />
            <Input
                type="password"
                label="Senha"
                bindFunction={setPassword}
                obs="Sua senha deve ter entre 6 e 50 caracteres"
                invalid={invalidInputs.includes(2)}
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
                Obs: Caso você seja uma instituição que atue no combate a fome,
                e queira participar do nosso programa de recebimento de doações,
                preencha a cadastro acima e selecione a opção “Instituição
                parceira”. Em seguida entraremos em contato para solicitar
                demais informações.
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
    )


    // const registeredMessage = (
    //     <S.Message>
    //         <h3>Cadastro realizado com sucesso!</h3>
    //         <h6>
    //             Você receberá uma confirmação por e-mail e também solicitaremos
    //             mais alguns dados para validar seu cadastro caso seja uma
    //             instituição ou ONG que atua no combate a fome.
    //         </h6>
    //         <img src={signedUpImg} alt="" />
    //     </S.Message>
    // )

    return (
        <FormShell>{formComponent}</FormShell>
    )
}

export default SignUpForm