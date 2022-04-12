import * as S from "./styles"
import { useState } from "react"
import Input from "../Input"
import TextArea from "../TextArea"
import Button from "../Button"
import emailjs from "@emailjs/browser"


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


    const handleSubmit = async e => {
        e.preventDefault()
        console.log(name, email)
        const response = await emailjs.send("contato_service", "form_contato", {
            name,
            email,
            message,
        }, PUBLIC_KEY)

        console.log(response)
    }


    return (
        <S.Container ong={page === "ong"}>
            <div className="info">{infos[page]}</div>
            <form onSubmit={handleSubmit}>
                {page === "cadastro" ? (
                    <>
                        <Input type="text" label="Nome" bindFunction={setName}/>
                        <Input type="text" label="E-mail" bindFunction={setEmail}/>
                    </>
                ) : null}
                <TextArea label="Escreva sua mensagem" bindFunction={setMessage}/>
                <Button type="submit">Enviar mensagem</Button>
            </form>
        </S.Container>
    )
}

export default ContactForm