import React from 'react'
import GuestRoutes from '../GuestRoutes.jsx/GuestRoutes'
import { Route, Routes } from 'react-router'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<GuestRoutes />} />
      </Routes>
    </div>
  )
}

export default MainRoute