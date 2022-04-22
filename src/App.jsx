import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/globals";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes />
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
