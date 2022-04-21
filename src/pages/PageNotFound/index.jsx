import * as S from "./styles"
import Layout from "../../components/Layout"
import FormShell from "../../components/FormShell"
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <Layout>
            <FormShell>
                <S.Container>   
                    <h3>Página não encontrada :(</h3>
                    <h6>Infelizmente, o endereço que você acessou não existe.</h6>
                    <h6>Clique <Link to="/" className="link">aqui</Link> para voltar para a página inicial</h6>
                </S.Container>
            </FormShell>
        </Layout>
    )
}

export default PageNotFound