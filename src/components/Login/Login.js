import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../UserContext/UserContext';


const Login = () => {
    const { loginUser, loginWithGoogle, forgetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    const recoverPassword = () => {
        forgetPassword(email)
            .then(() => {
                console.log('Password reset email sent!')
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label onClick={recoverPassword} className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-accent">Login</button>
                                <label className="label">
                                    <p className='label-text-alt'>or use one of these options</p>
                                </label>
                                <div className='flex items-center'>
                                    <button onClick={handleGoogleLogin} className="btn btn-outline btn-success m-2"><FaGoogle className='mx-2'></FaGoogle></button>
                                    <button className="btn btn-outline btn-info m-2"><FaFacebook className='mx-2'></FaFacebook> </button>
                                    <button className="btn btn-outline m-2"><FaGithub className='mx-2'></FaGithub> </button>
                                    <button className="btn btn-outline btn-info m-2"><FaTwitter className='mx-2'></FaTwitter> </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;