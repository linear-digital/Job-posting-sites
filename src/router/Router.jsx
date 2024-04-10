
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home/Home';
import App from './../App';
import Login from './../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    }
])

export default router;