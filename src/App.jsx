
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./routes"
import GlobalStyles from "./styles/globals"

const App = () => {
    return (
        <Router>
            <GlobalStyles/>
            <Routes/>
        </Router>
    )
}

export default App