
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home/Home';
import App from './../App';
import Login from './../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Error from '../pages/Error/Error';
import Contact from '../pages/Contact/Contact';

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
            },
            
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
])

export default router;