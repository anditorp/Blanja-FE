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
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                </Route>
                <Route element={<MainPage />}>
                    <Route path="/home" element={
                    <PrivateRoute>
                    <Home />
                    </PrivateRoute>
                    } />
                    <Route path="/products" element={
                    <PrivateRoute>
                    <Product />
                    </PrivateRoute>
                    } />
                    <Route path="/category" element={
                    <PrivateRoute>
                    <Category />
                    </PrivateRoute>
                    } />
                    <Route path="/customer-profile" element={
                    <PrivateRoute>
                    <MyAccount />
                    </PrivateRoute>
                    } />
                    <Route path="/shipping-address" element={
                    <PrivateRoute>
                    <ShippingPage />
                    </PrivateRoute>
                    } />
                    <Route path="/myorder" element={
                    <PrivateRoute>
                    <MyOrder />
                    </PrivateRoute>
                    } />
                    <Route path="/mybag" element={
                    <PrivateRoute>
                    <MyBag />
                    </PrivateRoute>
                    } />
                    <Route path="/checkout" element={
                    <PrivateRoute>
                    <Checkout />
                    </PrivateRoute>
                    } />
                    <Route path="/sellerprofile" element={
                    <PrivateRoute>
                    <SellerProfile />
                    </PrivateRoute>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter