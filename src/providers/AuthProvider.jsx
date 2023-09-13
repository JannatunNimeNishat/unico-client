import AuthContext from '@/contexts/AuthContext';
import React, { useEffect, useState } from 'react';

import auth, { googleProvider } from '@/firebase/firebase.auth'

// import {     } from "@/firebase/auth"
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = async (updateUser = {}) => {
        // console.log(updateUser);
        setLoading(true);
        // await updateProfile(auth.currentUser, updateProfile);
        // setUser((preUser) => ({ ...preUser, ...updateUser }))
        await updateProfile(auth.currentUser, updateProfile);
    }


    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const value = {
        user,
        createUser,
        signIn,
        profileUpdate,
        googleLogin,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;