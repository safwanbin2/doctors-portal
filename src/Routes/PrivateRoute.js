import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='text-center mt-20'><h2 className='text-2xl'>Loading...</h2></div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivateRoute;