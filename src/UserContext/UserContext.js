import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    /* create user with email and password */
    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* login with email and password */
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* login with email and password */
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    /* Sign Out User */
    const logOutUser = () => {
        return signOut(auth)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    /* Password recovr With Email*/
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log(currentuser)
            setUser(currentuser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, createUserWithEmailPassword, loginUser, loginWithGoogle, logOutUser, forgetPassword, verifyEmail }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;