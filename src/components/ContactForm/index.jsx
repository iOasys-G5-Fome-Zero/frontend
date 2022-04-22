import * as S from './styles'
import Input from '../Input'
import TextArea from '../TextArea'
import Button from '../Button'

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

const ContactForm = ({ page }) => {
    return (
        <S.Container ong={page === 'ong'}>
            <div className="info">{infos[page]}</div>
            <form
                action="https://formsubmit.co/ioasysgrupo5@gmail.com"
                method="POST"
            >
                <input
                    type="hidden"
                    name="_next"
                    value={`${window.location.origin}/obrigado`}
                />
                <input type="hidden" name="_captcha" value="false" />
                {page === 'cadastro' ? (
                    <>
                        <Input
                            type="text"
                            label="Nome"
                            bindFunction={() => false}
                        />
                        <Input
                            type="email"
                            label="E-mail"
                            bindFunction={() => false}
                        />
                    </>
                ) : null}
                <TextArea
                    label="Escreva sua mensagem"
                    bindFunction={() => false}
                />
                <Button type="submit">Enviar mensagem</Button>
            </form>
        </S.Container>
    )
}

export default ContactForm
