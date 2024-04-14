
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from './../App';
import Login from './../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Error from '../pages/Error/Error';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Dashboard/Profile/Profile';
import CreateJob from '../pages/Dashboard/CreateJob/CreateJob';
import Jobs from '../pages/Jobs/Jobs';
import JobDetails from '../pages/Jobs/JobDetails';
import Myposts from '../pages/Dashboard/MyPosts/Myposts';
import EditJobPost from '../pages/Dashboard/EditJobPost/EditJobPost';
import ApplyHistory from '../pages/Dashboard/ApplyHistory/ApplyHistory';
import { RecruiterChecker, UserChecker } from '../components/AuthChecker';

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
                element: <UserChecker>
                    <Dashboard />
                </UserChecker>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'jobs',
                        element: <RecruiterChecker>
                            <Myposts />
                        </RecruiterChecker>
                    }, {
                        path: 'apply-history',
                        element: <ApplyHistory />
                    },
                    {
                        path: 'jobs/:id',
                        element: <RecruiterChecker>
                            <EditJobPost />
                        </RecruiterChecker>
                    }, {
                        path: 'create',
                        element: <RecruiterChecker>
                            <CreateJob />
                        </RecruiterChecker>
                    },
                    {
                        path: '*',
                        element: <Profile />
                    }

                ]
            },
            {
                path: "jobs",
                element: <Jobs />
            },
            {
                path: "jobs/:id",
                element: <JobDetails />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
])

export default router;