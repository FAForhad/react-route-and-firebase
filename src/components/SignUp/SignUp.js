import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const SignUp = () => {
    const { createUserWithEmailPassword, verifyEmail } = useContext(AuthContext)

    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        if (password !== confirm) {
            setError('Your password did not match')
        }
        if (!/^(?=.*[A-Z])/.test(password)) {
            setError('Please Provide At Least One UpperCase letters')
            return
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please Provide At Least One Special letter')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please Provide At Least One Number')
            return
        }
        if (password.length < 8) {
            setError('Password Should Be 8 letter or more')
            return
        }
        setError('')
        console.log(email, password, name)
        createUserWithEmailPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                verifyEmail()
                    .then(() => {
                        console.log('Email verification sent!')
                    });
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
                                <label className="label">
                                    <p className='label-text-alt'>Already Have Account? <Link className='text-white' to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <p className='label-text-alt text-red-500'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-outline btn-accent" >Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;