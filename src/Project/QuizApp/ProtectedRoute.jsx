import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

    const user = sessionStorage.getItem('user')

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
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default ProtectedRoute