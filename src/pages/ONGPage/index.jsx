import Layout from "../../components/Layout";
import WelcomeSection from "./WelcomeSection";
import DonationsSection from "./DonationsSection";
import ContactForm from "../../components/ContactForm";
import useProtectedRoute from "../../hooks/useProtectedRoute";

const ONGPage = () => {
  useProtectedRoute();

  return (
    <Layout>
      <WelcomeSection />
      <DonationsSection />
      <ContactForm page="ong" />
    </Layout>
  );
};

export default ONGPage;
