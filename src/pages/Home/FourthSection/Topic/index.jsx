import * as S from "./styles"

const topicContents = [
    "Escolha a frequência que deseja fazer sua assinatura (semanal ou quinzenal)",
    "Escolha o tamanho da sua cesta (pequena, média ou grande)",
    "Escolha se vai querer todos os alimentos da semana ou se deseja converter parte em doações.",
    "Receba ou retire sua cesta e escolha para qual instituição deseja doar!"
]

const Topic = ({ index }) => {
    return (
        <S.Container>
            <div className="number">
                {index}
            </div>
            <div className="content">
                {topicContents[index - 1]}
            </div>
        </S.Container>
    )
}

export default Topic