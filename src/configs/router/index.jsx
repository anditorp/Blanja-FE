import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login';
import Home from './../../pages/home/home';
import PageLayout from '../../pages/pageLayout';
import MainPage from './../../pages/mainPage';
import Product from '../../pages/product/product';
import Category from '../../pages/category/category';
import MyAccount from '../../pages/customer/myaccount';
import Register from '../../pages/Auth/Register'
import MyBag from '../../pages/Main/MyBag'
import Checkout from '../../pages/Main/Checkout'
import SellerProfile from '../../pages/Main/SellerProfile'
import ShippingPage from '@/pages/customer/shipping';
import MyOrder from '@/pages/customer/myorder';

import PrivateRoute from '@/components/module/privateroute/privateroute';



const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                </Route>
                <Route element={<MainPage />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/customer-profile" element={<MyAccount />} />
                    <Route path="/shipping-address" element={<ShippingPage />} />
                    <Route path="/myorder" element={<MyOrder />} />
                    <Route path="/mybag" element={<MyBag />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/sellerprofile" element={<SellerProfile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter