import Layout from "../../components/Layout";
import FormShell from "../../components/FormShell";
import IncompletePageMessage from "../../components/IncompletePageMessage";
import useProtectedRoute from "../../hooks/useProtectedRoute";

const ProducerPage = () => {

    useProtectedRoute()

    return (
        <Layout>
            <FormShell>
                <IncompletePageMessage/>
            </FormShell>
        </Layout>
    )
}

export default ProducerPage