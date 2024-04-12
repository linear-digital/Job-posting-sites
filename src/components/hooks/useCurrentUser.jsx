import { useEffect } from "react"
import { useState } from "react"
import { api } from "../axios/instance"

const useCurrentUser = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        try {
            api.get('/user/me').then((res) => {
                setUser(res.data || null)
            })
        } catch (error) {
            console.error(error)
        }
    }, [])
    return user

}

export default useCurrentUser