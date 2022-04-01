import Layout from "../../components/Layout"
import FirstSection from "./FirstSection"
import VerticalSection from "../../components/VerticalSection"

const Home = () => {
    return (
        <Layout>
            <FirstSection/>
            <VerticalSection name="secondSectionHome"/>
        </Layout>
    )
}

export default Home