import Layout from "../../components/Layout";
import LoginOrSignUpForm from "../../components/LoginOrSignUpForm";

const Login = () => {
    return (
        <Layout>
            <LoginOrSignUpForm login={true}/>
        </Layout>
    )
}

export default Login