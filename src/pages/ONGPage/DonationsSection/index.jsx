import * as S from "./styles"
import ImgSrc from "../../../assets/DonationsImage.png"
import { useState } from "react"

const DonationsSection = () => {

    const [donations, setDonations] = useState(100)
    const [target, setTarget] = useState(150)

    return (
        <S.Container donations={donations} barFill={(donations / target) * 100}>
            <h1>Doações recebidas</h1>
            <p className="regular-text">Acompanhe abaixo o recebimento de doações do mês, realizadas através de doações dos nossos assinantes de cestas pelo app.</p>
            <div className="donations">
                <div className="img-container">
                    <img src={ImgSrc} alt="" />
                </div>
                <div className="donations-data">
                    <div className="bar"/>
                    <p className="ong-data">Atingimento: {`${donations}/${target}`}</p>
                    <p className="ong-data">Meta do mês: {`${target} `} moedas Horticoins</p>
                </div>
            </div>
            <p className="regular-text bottom-p">A cada mês seu saldo de Horticoins será creditado em dinheirona sua conta cadastrada para compra de alimentos direto com os produtores credenciados.</p>
        </S.Container>
    )
}

export default DonationsSection