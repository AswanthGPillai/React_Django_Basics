import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

    const user = JSON.parse(sessionStorage.getItem('user'))

    if (!user) {
        /* 
        Without replace
        -----------------
Suppose the user directly visits:

/user

They aren't logged in, so they get redirected:

/user → /

If you don't use replace:

<Navigate to="/" />

the browser history can be:

/user → /

If the user presses the browser Back button, they may go back to /user, which immediately redirects to / again. */
        alert("Please Register Your Account")
        return <Navigate to="/register" replace />

    } 
    

   
    
    if (user) {

        user.login == false
        alert("Please Login...")
        return <Navigate to="/login" replace />

    }

    return <Outlet />
}

export default ProtectedRoute