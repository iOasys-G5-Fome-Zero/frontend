import { createContext, useState } from "react";
import axios from "axios";


const api = axios.create({
    baseURL: 'https://ioasys-g5-fome-zero-api-dev.herokuapp.com'
})

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const logIn = async (data, successCallback, errorCallback) => {
        try{
            const { data: postData } = await api.post('/auth/login', data)
            console.log("LOGADO!")
            setUser(postData)
            successCallback()
        } catch (e){
            errorCallback(e)
        }
    }

    const signUp = async (data, successCallback, errorCallback) => {
        try{
            const { data: postData } = await api.post("/users/new-user", data)
            setUser(postData)
            successCallback()
        } catch (e){
            errorCallback(e)
        }
    }

    return (
        <UserContext.Provider value={{ logIn, user, signUp }}>
            {children}
        </UserContext.Provider>
    )
}
