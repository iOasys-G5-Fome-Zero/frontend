import * as S from './styles'
import ImgSrc from '../../../assets/DonationsImage.png'
import { useState } from 'react'

const DonationsSection = () => {
    const [donations] = useState(100)
    const [target] = useState(150)

    return (
        <S.Container donations={donations} barFill={(donations / target) * 100}>
            <h2>Doações recebidas</h2>
            <h5>
                Acompanhe abaixo o recebimento de doações do mês, realizadas
                através de doações dos nossos assinantes de cestas pelo app.
            </h5>
            <div className="donations">
                <div className="img-container">
                    <img src={ImgSrc} alt="" />
                </div>
                <div className="donations-data">
                    <div className="bar" />
                    <p className="ong-data">
                        Atingimento: {`${donations}/${target}`}
                    </p>
                    <p className="ong-data">
                        Meta do mês: {`${target} `} moedas Horticoins
                    </p>
                </div>
            </div>
            <h5>
                A cada mês seu saldo de Horticoins será creditado em dinheirona
                sua conta cadastrada para compra de alimentos direto com os
                produtores credenciados.
            </h5>
        </S.Container>
    )
}

export default DonationsSection
