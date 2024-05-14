import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../../pages/Landing'

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter