import Layout from "../../components/Layout";
import WhoAreWe from "./WhoAreWe";
import ProducersSection from "./ProducersSection";
import Invite from "../../components/Inivite";
import InstitutionsSection from "./InstitutionsSections";

const About = () => {
    return (
        <Layout>
            <WhoAreWe/>
            <ProducersSection/>
            <InstitutionsSection/>
            <Invite title="Deseja ser uma instituição beneficiada?" path="/cadastro"/>
        </Layout>
    )
}

export default About