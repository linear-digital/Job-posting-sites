
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home/Home';
import App from './../App';
import Login from './../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Error from '../pages/Error/Error';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Dashboard/Profile/Profile';

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
                path: 'panel',
                element: <Dashboard />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: '*',
                        element: <Profile />
                    }

                ]
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
])

export default router;