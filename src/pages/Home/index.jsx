import Layout from "../../components/Layout"
import FirstSection from "./FirstSection"
import VerticalSection from "../../components/VerticalSection"
import ThirdSection from "./ThirdSection"
import StoresLinks from "../../components/StoresLinks"
import BasketSection from "./BasketSection"
import TestimonySection from "./TestimonySection"

const Home = () => {
    return (
        <Layout>
            <FirstSection/>
            <VerticalSection name="secondSectionHome"/>
            <ThirdSection/>
            <VerticalSection name="fourthSectionHome"/>
            <StoresLinks/>
            <BasketSection/>
            <TestimonySection/>
        </Layout>
    )
}

export default Home