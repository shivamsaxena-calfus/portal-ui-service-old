"use client"
import { useEffect } from 'react';
import { useAuth } from "react-oidc-context";
import { CircularProgress } from '@mui/material';

const AuthGaurd = ({children}: {children: React.ReactNode}) => {
    const auth = useAuth();

    useEffect(() => {
        if (!auth.isAuthenticated && !auth.isLoading && !auth.activeNavigator) {
            auth.signinRedirect();   
        }
    }, [auth]);

    useEffect(() => {
        // the `return` is important - addAccessTokenExpiring() returns a cleanup function
        return auth.events.addAccessTokenExpiring(() => {
            alert("You're being signed out due to inactivity");
            auth.signoutSilent();
            auth.signinRedirect(); 
        })
    }, [auth.events]);

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading ) {
        return (
            <div className="h-screen flex justify-center items-center">
                <CircularProgress color="inherit" size={150} />
            </div>
        )
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return <>{children}</>; 
    }

    return null;
};
export default AuthGaurd;