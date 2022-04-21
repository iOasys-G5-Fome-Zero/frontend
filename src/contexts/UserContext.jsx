import { createContext, useState } from "react";
import axios from "axios";


const api = axios.create({
    baseURL: 'https://ioasys-g5-fome-zero-api-dev.herokuapp.com'
})

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const userJSON = localStorage.getItem("user")

    const [user, setUser] = useState(userJSON ? JSON.parse(userJSON) : null)

    const logInAsOng = (email, keepLogged) => {
        const newUser = {
            email,
            first_name: "ONG Criança Sem Fome",
            user_type: "ong"
        }
        setUser(newUser)
        if(keepLogged)
            localStorage.setItem("user", JSON.stringify(newUser))
    }

    const logIn = async (data, successCallback, errorCallback, keepLogged) => {
        try{
            const { data: postData } = await api.post('/auth/login', data)
            console.log(postData)
            setUser(postData)
            successCallback()
            if(keepLogged)
                localStorage.setItem("user", JSON.stringify(postData))
        } catch (e){
            errorCallback(e)
        }
    }

    const signUp = async (data, successCallback, errorCallback) => {
        try{
            const { data: postData } = await api.post("/users/new-user", data)
            console.log(postData)
            setUser(postData)
            successCallback()
        } catch (e){
            errorCallback(e)
        }
    }

    const logOut = () => {
        localStorage.setItem("user", "")
        setUser()
    }

    const loggedIn = !!user

    return (
        <UserContext.Provider value={{ logIn, user, signUp, loggedIn, logOut, logInAsOng }}>
            {children}
        </UserContext.Provider>
    )
}
