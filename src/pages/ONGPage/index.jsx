import Layout from "../../components/Layout";
import WelcomeSection from "./WelcomeSection";
import DonationsSection from "./DonationsSection";
import ContactForm from "../../components/ContactForm";

const ONGPage = () => {
    return (
        <Layout>
            <WelcomeSection/>
            <DonationsSection/>
            <ContactForm name="ong"/>
        </Layout>
    )
}

export default ONGPage