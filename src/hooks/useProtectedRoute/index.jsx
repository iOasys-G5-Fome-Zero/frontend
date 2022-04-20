import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

const useProtectedRoute = () => {
    const { loggedIn } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedIn) {
            navigate("/login")
        }
    }, [loggedIn, navigate])
}

export default useProtectedRoute