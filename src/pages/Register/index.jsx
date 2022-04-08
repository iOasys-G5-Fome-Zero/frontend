import Layout from "../../components/Layout";
import LoginOrSignUpForm from "../../components/LoginOrSignUpForm";
import ContactForm from "../../components/ContactForm";

const Register = () => {
    return (
        <Layout>
            <LoginOrSignUpForm/>
            <ContactForm name="cadastro"/>
        </Layout>
    )
}

export default Register