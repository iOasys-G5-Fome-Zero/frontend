import * as S from "./styles"
import Input from "../../../components/Input"
import TextArea from "../../../components/TextArea"

const ContactForm = () => {
    return (
        <S.Container>
            <div className="info">
                <h1>Entre em contato conosco!</h1>
                <p>
                    Quer saber mais sobre a Cestou, tirar dúvidas ou fazer
                    doações? Utilize o formulário ao lado e nos envie uma
                    mensagem.
                </p>
                <p>Responderemos assim que possível.</p>
            </div>
            <form action="">
                <Input type="text" label="Nome"/>
                <Input type="text" label="E-mail"/>
                <TextArea label="Escreva sua mensagem"/>
                <button type="submit">
                    Enviar mensagem
                </button>
            </form>
        </S.Container>
    )
}

export default ContactForm