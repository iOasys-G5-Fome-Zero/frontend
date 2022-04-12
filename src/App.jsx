
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./routes"
import GlobalStyles from "./styles/globals"
import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyles />
                <Routes />
            </Router>
        </ThemeProvider>
    )
}

export default App