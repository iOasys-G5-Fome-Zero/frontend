import StoresLinks from '../../../components/StoresLinks'
import * as S from './styles'

const FirstSection = () => {
    return (
        <S.Container>
            <div className="left">
                <h1>Produtos frescos na sua mesa toda semana!</h1>
                <h5>
                    Produzidos por agricultores familiares locais e que se
                    preocupam com o meio ambiente!
                </h5>
                <div className="stores-container">
                    <StoresLinks />
                </div>
            </div>
        </S.Container>
    )
}

export default FirstSection
