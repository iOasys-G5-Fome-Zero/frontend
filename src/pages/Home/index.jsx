import Layout from "../../components/Layout"
import FirstSection from "./FirstSection"
import VerticalSection from "../../components/VerticalSection"
import ThirdSection from "./ThirdSection"
import FourthSection from "./FourthSection"
import StoresLinks from "../../components/StoresLinks"
import BasketSection from "./BasketSection"
import TestimonySection from "./TestimonySection"
import { Link } from "react-router-dom"
import * as S from "./styles"

const Home = () => {
    return (
        <Layout>
            <FirstSection />
            <VerticalSection name="secondSectionHome" />
            <ThirdSection />
            <FourthSection/>
            <StoresLinks />
            <BasketSection />
            <TestimonySection />
            <S.Invite>
                <h1>Deseja fazer parte?</h1>
                <div className="sign-up-link">
                    <Link to="/cadastro">Cadastre-se</Link>
                </div>
            </S.Invite>
        </Layout>
    )
}

export default Home