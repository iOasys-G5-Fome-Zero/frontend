import Layout from '../../components/Layout'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import StoresLinks from '../../components/StoresLinks'
import BasketSection from './BasketSection'
import TestimonySection from './TestimonySection'

const Home = () => {
    return (
        <Layout>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <StoresLinks />
            <BasketSection />
            <TestimonySection />
        </Layout>
    )
}

export default Home
