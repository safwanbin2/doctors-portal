import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ErrorPage = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    const error = useRouteError();
    console.log(error)
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-2xl text-red-400'>Something went wrong!</h2>
            <h1 className='text-3xl font-bold text-red-500'>{error.status} {error.statusText}</h1>
            <p>Pleease <button onClick={handleLogOut} className='btn-link'>log out</button> and log back in</p>
        </div>
    );
};

export default ErrorPage;