/* eslint-disable react/prop-types */
import Login from "../pages/Auth/Login"
import useCurrentUser from "./hooks/useCurrentUser"

export const RecruiterChecker = ({ children }) => {
    const user = useCurrentUser()
    if (user?.role === "recruiter") {
        return children
    }
    else {
        return <Login />
    }
}

export const UserChecker = ({ children }) => {
    const user = useCurrentUser()
    if (user) {
        return children
    }
    else {
        return <Login />
    }
}