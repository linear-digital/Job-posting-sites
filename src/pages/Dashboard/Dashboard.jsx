import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useCurrentUser from '../../components/hooks/useCurrentUser';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const user = useCurrentUser();
    const location = useLocation();
    return (
        <div>
        
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-4 max-h-screen overflow-y-auto">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className={location.pathname === '/panel/profile' ? 'active' : ''}>
                            <Link to="/panel/profile">Profile</Link>
                        </li>
                        <li className={location.pathname === '/panel/apply-history' ? 'active' : ''}>
                            <Link to="/panel/apply-history">Apply History</Link>
                        </li>
                        <li className={location.pathname === '/panel/jobs' ? 'active' : ''}>
                            <Link to="/panel/jobs">Your Job Posts</Link>
                        </li>
                        <li className={location.pathname === '/panel/create' ? 'active' : ''}>
                            <Link to="/panel/create">Create A Job Post</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;