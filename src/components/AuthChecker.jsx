/* eslint-disable react/prop-types */
import Login from "../pages/Auth/Login"
import useCurrentUser from "./hooks/useCurrentUser"

export const RecruiterChecker = ({ children }) => {
    const user = useCurrentUser()
    console.log(user)
    if (user?.role === "recruiter") {
        return children
    }
    else if (user === undefined) {
        return <Login />
    }
}

export const UserChecker = ({ children }) => {
    const user = useCurrentUser()
    console.log(user)
    if (user) {
        return children
    }
    else if (user === undefined) {
        return <Login />
    }
}