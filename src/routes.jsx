import { Routes as Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/sobre" exact element={<About/>}/>
            <Route path="/cadastro" exact element={<Register/>}/>
        </Switch>
    )
}

export default Routes 