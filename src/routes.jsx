import { Routes as Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ONGPage from "./pages/ONGPage"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/sobre" exact element={<About/>}/>
            <Route path="/cadastro" exact element={<Register/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/ong" exact element={<ONGPage/>}/>
        </Switch>
    )
}

export default Routes 