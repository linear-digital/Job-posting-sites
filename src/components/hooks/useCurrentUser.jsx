import { useEffect } from "react"
import { useState } from "react"
import { api } from "../axios/instance"
import Cookie from 'js-cookie';

const useCurrentUser = () => {
    const token = Cookie.get('accessToken')
    const [user, setUser] = useState()
    useEffect(() => {
        if (!token) return
        try {
            api.get('/user/me').then((res) => {
                setUser(res.data || null)
            })
        } catch (error) {
            console.error(error)
        }
    }, [token])

    return user

}


export default useCurrentUser