import * as S from "./styles"
import { useState, useContext } from "react"
import Input from "../Input"
import TextArea from "../TextArea"
import Button from "../Button"
import emailjs from "@emailjs/browser"
import { MoonLoader } from "react-spinners"
import { ThemeContext } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons"


const infos = {
    cadastro: (
        <>
            <h2>Entre em contato conosco!</h2>
            <h5>
                Quer saber mais sobre a Cestou, tirar dúvidas ou fazer doações?
                Utilize o formulário ao lado e nos envie uma mensagem.
            </h5>
            <h5>Responderemos assim que possível.</h5>
        </>
    ),
    ong: (
        <>
            <h2>Encontrou algum problema?</h2>
            <h5>
            Envie-nos uma mensagem e assim que possível iremos te retornar.
            </h5>
        </>
    ),
}


const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY


const ContactForm = ({ page }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [responseMessage, setResponseMessage] = useState("")
    const [error, setError] = useState(false)

    const theme = useContext(ThemeContext)

    console.log(theme)

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(name, email)
        setLoading(true)
        const { status } = await emailjs.send(
            "contato_service",
            "form_contato",
            {
                name,
                email,
                message,
            },
            PUBLIC_KEY
        )
        setLoading(false)

        if (status === 200) {
            setResponseMessage("Sua mensagem foi enviada com sucesso!")
            setError(false)
        } else {
            setResponseMessage("Ocorreu um erro ao enviar sua mensagem")
            setError(true)
        }
    }

    const loaderStyles = `
        display: block;
        margin-top: 30px;
    `


    return (
        <S.Container ong={page === "ong"} error={error}>
            <div className="info">{infos[page]}</div>
            <form onSubmit={handleSubmit}>
                {page === "cadastro" ? (
                    <>
                        <Input
                            type="text"
                            label="Nome"
                            bindFunction={setName}
                        />
                        <Input
                            type="text"
                            label="E-mail"
                            bindFunction={setEmail}
                        />
                    </>
                ) : null}
                <TextArea
                    label="Escreva sua mensagem"
                    bindFunction={setMessage}
                />
                <Button type="submit">Enviar mensagem</Button>
                <div className="loader-and-message">
                    {loading ? (
                        <MoonLoader
                            color={theme.colors.primary.dark}
                            size={loading ? 40 : 0}
                            css={loaderStyles}
                        />
                    ) : (
                        <div className="response-message">
                            {responseMessage ? (
                                error ? (
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="icon"
                                    />
                                )
                            ) : (
                                ""
                            )}
                            {responseMessage}
                        </div>
                    )}
                </div>
            </form>
        </S.Container>
    )
}

export default ContactForm