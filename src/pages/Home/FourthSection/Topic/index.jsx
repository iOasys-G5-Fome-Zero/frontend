import * as S from "./styles"

const topicContents = [
    "Escolha a frequência que deseja fazer sua assinatura (semanal ou quinzenal)",
    "Escolha o tamanho da sua cesta (pequena, média ou grande)",
    "Selecione itens não desejados na semana para converter em doações ou confirme todos os itens para recebê-los.",
    "Caso doe algum alimento na semana, escolha para qual ONG ou Instituição deseja doá-lo.",
    "Combine com o produtor a retirada de sua cesta ou escolha recebê-la em casa e ter uma semana de alimentação saudável!"
]

const Topic = ({ index }) => {
    return (
        <S.Container>
            <div className="number">
                {index}
            </div>
            <h5 className="content">
                {topicContents[index - 1]}
            </h5>
        </S.Container>
    )
}

export default Topic