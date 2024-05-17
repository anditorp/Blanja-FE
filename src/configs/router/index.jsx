import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../../pages/Landing'
import Register from '../../pages/Auth/Register'

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter