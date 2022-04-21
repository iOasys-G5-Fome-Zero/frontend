import { Routes as Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ONGPage from "./pages/ONGPage"
import ProducerPage from "./pages/ProducerPage"
import ConsumerPage from "./pages/ConsumerPage"
import ThankYou from "./pages/ThankYou"
import PageNotFound from "./pages/PageNotFound"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/sobre" exact element={<About/>}/>
            <Route path="/cadastro" exact element={<Register/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/ong" exact element={<ONGPage/>}/>
            <Route path="/obrigado" exact element={<ThankYou/>}/>
            <Route path="/producer" exact element={<ProducerPage/>}/>
            <Route path="/consumer" exact element={<ConsumerPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Switch>
    )
}

export default Routes 