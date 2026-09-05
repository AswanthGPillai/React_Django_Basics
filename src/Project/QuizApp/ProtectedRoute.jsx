import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {


    const storedUser = sessionStorage.getItem('user')

    // No user registered/logged in
    if (!storedUser) {

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




        return <Navigate to="/register" replace />
    }


    const user = JSON.parse(storedUser)



    if (user.login !== true) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedRoute