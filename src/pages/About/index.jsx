import Layout from "../../components/Layout";
import WhoAreWe from "./WhoAreWe";
import VerticalSection from "../../components/VerticalSection"
import Invite from "../../components/Inivite";

const About = () => {
    return (
        <Layout>
            <WhoAreWe/>
            <VerticalSection name="producers"/>
            <VerticalSection name="institutions"/>
            <Invite title="Deseja ser uma instituição beneficiada?" path="/cadastro"/>
        </Layout>
    )
}

export default About