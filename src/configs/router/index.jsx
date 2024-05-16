import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../../pages/Landing'
import Register from '../../pages/Auth/Register'
import MyBag from '../../pages/Main/MyBag'
import Checkout from '../../pages/Main/Checkout'
import SellerProfile from '../../pages/Main/SellerProfile'


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/mybag" element={<MyBag />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/sellerprofile" element={<SellerProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter