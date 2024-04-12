import { useEffect } from "react"
import { useState } from "react"
import { api } from "../axios/instance"

const useCurrentUser = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
       api.get('/user/me').then((res) => {
           setUser(res.data || null)
       })
    }, [])
    return user

}

export default useCurrentUser