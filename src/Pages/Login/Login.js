import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleFormSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // saveUser(user.name, user.email);
                getJwtToken(email);
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    const handleGoogle = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    // const saveUser = (name, email) => {
    //     const userData = { name, email }
    //     fetch('http://localhost:5000/users', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(userData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             getJwtToken(email);
    //         })
    // }

    const getJwtToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('doctorsportal-token', data.token)
                navigate('/')
            })
    }


    return (
        <div className='flex justify-center items-center flex-col min-h-screen'>
            <div className="w-96 p-8 shadow-lg ">
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: "email is required"
                    })} className="input input-bordered w-full" type="email" />
                    {errors.email && <p className='text-error my-2'>{errors.email.message}</p>}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: "password can not be empty",
                        minLength: { value: 6, message: "password can not be less than 6 chars" }
                    })} className="input input-bordered w-full" type="password" />
                    {errors.password && <p className='text-error my-2'>{errors.password.message}</p>}
                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>

                    {/* submiting */}
                    <input type="submit" value="Login" className='btn btn-neutral w-full' />
                </form>
                <p className='text-sm text-center my-4'>New to Doctors Portal? <Link to='/signup' className='text-semibold text-secondary'>Create an account</Link></p>

                <div className="divider">OR</div>

                <button onClick={handleGoogle} className='btn btn-outline w-full'>continue with google</button>
            </div>
        </div>
    );
};

export default Login;