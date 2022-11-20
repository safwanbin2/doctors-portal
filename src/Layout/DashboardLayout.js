import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar';
// import Dashboard from '../Pages/Dashboard/Dashboard';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
// import MyAppointment from '../Pages/Dashboard/MyAppointment';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);
    console.log(isAdmin)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <Dashboard></Dashboard> */}
                    {/* <MyAppointment></MyAppointment> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My appointments</Link></li>
                        {isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctors'>Add Doctors</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;