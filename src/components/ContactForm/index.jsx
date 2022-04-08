import * as S from "./styles"
import Input from "../Input"
import TextArea from "../TextArea"

const infos = {
    cadastro: (
        <>
            <h1>Entre em contato conosco!</h1>
            <p>
                Quer saber mais sobre a Cestou, tirar dúvidas ou fazer doações?
                Utilize o formulário ao lado e nos envie uma mensagem.
            </p>
            <p>Responderemos assim que possível.</p>
        </>
    ),
    ong: (
        <>
            <h1>Encontrou algum problema?</h1>
            <p>
            Envie-nos uma mensagem e assim que possível iremos te retornar.
            </p>
        </>
    ),
}



const ContactForm = ({ name }) => {
    return (
        <S.Container ong={name === "ong"}>
            <div className="info">{infos[name]}</div>
            <form action="">
                {name === "cadastro" ? (
                    <>
                        <Input type="text" label="Nome" />
                        <Input type="text" label="E-mail" />
                    </>
                ) : null}
                <TextArea label="Escreva sua mensagem" />
                <button type="submit">Enviar mensagem</button>
            </form>
        </S.Container>
    )
}

export default ContactForm