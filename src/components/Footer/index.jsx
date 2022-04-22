import * as S from './styles'
import NavLink from '../NavLink'
import StoresLinks from '../StoresLinks'

const Footer = () => {
    return (
        <S.Container>
            <nav>
                <NavLink
                    path="/"
                    label="Início"
                    disableHighlight={true}
                    special={true}
                ></NavLink>
                <NavLink
                    path="/sobre"
                    label="Sobre"
                    disableHighlight={true}
                    special={true}
                ></NavLink>
                <NavLink
                    path="/cadastro"
                    label="Cadastro"
                    disableHighlight={true}
                    special={true}
                ></NavLink>
                <NavLink
                    path="/ajuda"
                    label="Ajuda"
                    disableHighlight={true}
                    special={true}
                ></NavLink>
            </nav>
            <div className="appstores">
                <span>Baixe o aplicativo</span>
                <StoresLinks vertical={true} />
            </div>
        </S.Container>
    )
}

export default Footer
