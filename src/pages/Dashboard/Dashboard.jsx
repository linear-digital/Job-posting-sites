import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useCurrentUser from '../../components/hooks/useCurrentUser';
import { useLocation } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { signOut } from '../../components/hooks/signOut';
import { Bars3Icon } from '@heroicons/react/16/solid';

const Dashboard = () => {
    const user = useCurrentUser();
    const location = useLocation();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:ml-4 max-h-screen overflow-y-auto text-blue-gray-900">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <Bars3Icon width={24} />
                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full text-blue-gray-900  bg-white">
                        <h1 className='text-center text-xl font-bold mb-6 pt-4'>
                            <Link to='/'>Volunteering Society</Link>
                        </h1>
                        {/* Sidebar content here */}
                        <li className={location.pathname === '/panel/profile' ? 'active' : ''}>
                            <Link to="/panel/profile">Profile</Link>
                        </li>
                        {
                            user?.role === "user" &&
                            <li className={location.pathname === '/panel/apply-history' ? 'active' : ''}>
                                <Link to="/panel/apply-history">Apply History</Link>
                            </li>

                        }

                        {
                            user?.role === "recruiter" &&
                            <>
                                <li className={location.pathname === '/panel/jobs' ? 'active' : ''}>
                                    <Link to="/panel/jobs">Your Job Posts</Link>
                                </li>
                                <li className={location.pathname === '/panel/create' ? 'active' : ''}>
                                    <Link to="/panel/create">Create A Job Post</Link>
                                </li>
                            </>
                        }

                        <li>
                            <Button color='red' className='mt-10'
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                SignOut
                            </Button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;