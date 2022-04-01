import Layout from "../../components/Layout"
import FirstSection from "./FirstSection"
import VerticalSection from "../../components/VerticalSection"
import ThirdSection from "./ThirdSection"
import StoresLinks from "../../components/StoresLinks"

const Home = () => {
    return (
        <Layout>
            <FirstSection/>
            <VerticalSection name="secondSectionHome"/>
            <ThirdSection/>
            <VerticalSection name="fourthSectionHome"/>
            <StoresLinks/>
        </Layout>
    )
}

export default Home