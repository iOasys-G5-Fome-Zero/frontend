import Layout from "../../components/Layout";
// import LoginOrSignUpForm from "../../components/LoginOrSignUpForm";
import SignUpForm from "../../components/SignUpForm";
import ContactForm from "../../components/ContactForm";

const Register = () => {
  return (
    <Layout>
      {/* <LoginOrSignUpForm/> */}
      <SignUpForm />
      <ContactForm page="cadastro" />
    </Layout>
  );
};

export default Register;
