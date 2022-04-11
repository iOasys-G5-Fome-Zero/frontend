import * as S from "./styles"
import Input from "../Input"
import TextArea from "../TextArea"

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