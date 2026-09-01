import React from 'react'
import HomePage from '../HomePage/HomePage'
import About from '../HomePage/About'
import Contact from '../HomePage/Contact'
import { Route, Routes } from 'react-router'

const GuestRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default GuestRoutes