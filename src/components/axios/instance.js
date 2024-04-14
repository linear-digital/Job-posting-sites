import axios from "axios";
import Cookie  from 'js-cookie';

export const api = axios.create({
    baseURL: 'https://job-planet-server.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
        'token': Cookie.get('accessToken')
    }
})

