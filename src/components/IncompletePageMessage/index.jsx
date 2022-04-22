import LoggedInImg from '../../assets/LoggedInImg.png'
import * as S from './styles'
import StoresLinks from '../StoresLinks'

const IncompletePageMessage = () => {
    return (
        <S.Message>
            <h3>Seja bem-vindo!</h3>
            <h6>
                No momento ainda estamos trabalhando para tornar sua experiência
                completa pelo site, mas por enquanto tenha acesso a todas as
                nossas funcionalidades baixando o aplicativo Cestou.
            </h6>
            <img src={LoggedInImg} alt="" />
            <StoresLinks />
        </S.Message>
    )
}

export default IncompletePageMessage
