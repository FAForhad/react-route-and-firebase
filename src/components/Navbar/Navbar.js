import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Navbar = () => {
    const { logOutUser, user } = useContext(AuthContext)

    const handleSignOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'><li><a>Home</a></li></Link>
                            <Link to='/login'><li><a>Login</a></li></Link>
                            <Link to='/signup'><li><a>Sign Up</a></li></Link>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Hotel Service</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link to='/'><li><a>Home</a></li></Link>

                        {
                            user?.email ?
                                <Link to='/login'><li><a>Login</a></li></Link>
                                :
                                <>
                                    <Link to='/login'><li><a>Login</a></li></Link>
                                    <Link to='/signup'><li><a>Sign Up</a></li></Link>
                                </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <>{user?.displayName}</>
                    <div className="ml-2 dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li onClick={handleSignOut}><a>LogOut</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;







