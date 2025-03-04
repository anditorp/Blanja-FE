/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login';
import Home from './../../pages/home/home';
import PageLayout from '../../pages/pageLayout';
import MainPage from './../../pages/mainPage';
import Product from '../../pages/product/product';
import Tshirt from '../../pages/category/tshirt';
import MyAccount from '../../pages/customer/myaccount';
import Register from '../../pages/Auth/Register'
import MyBag from '../../pages/Main/MyBag'
import Checkout from '../../pages/Main/Checkout'
import SellerProfile from '../../pages/Main/SellerProfile'
import ShippingPage from '@/pages/customer/shipping';
import MyOrder from '@/pages/customer/myorder';

import PrivateRoute from '@/components/module/privateroute/privateroute';
import Jacket from '@/pages/category/jacket';
import Shoes from '@/pages/category/shoes';
import Pants from '@/pages/category/pants';
import Shorts from '@/pages/category/shorts';
import CategoryPage from '@/pages/category/category';
import SearchPage from '@/pages/search/search';
import StoreProfile from '@/components/module/StoreProfile';
import MyProduct from '@/components/module/MyProduct';
import SellingProduct from '@/components/module/SellingProduct';
import MyOrderSeller from '@/components/module/MyOrder';


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<Product />} />
                </Route>
                <Route element={<MainPage />}>
                    <Route path="/home" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                    <Route path="/products/:id" element={
                        <PrivateRoute>
                            <Product />
                        </PrivateRoute>
                    } />
                    <Route path="/category" element={
                        <PrivateRoute>
                            <CategoryPage />
                        </PrivateRoute>
                    } />
                    <Route path="/category/tshirt" element={
                        <PrivateRoute>
                            <Tshirt />
                        </PrivateRoute>
                    } />
                    <Route path="/category/jacket" element={
                        <PrivateRoute>
                            <Jacket />
                        </PrivateRoute>
                    } />
                    <Route path="/category/shoes" element={
                        <PrivateRoute>
                            <Shoes />
                        </PrivateRoute>
                    } />
                    <Route path="/category/pants" element={
                        <PrivateRoute>
                            <Pants />
                        </PrivateRoute>
                    } />
                    <Route path="/category/shorts" element={
                        <PrivateRoute>
                            <Shorts />
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
                    <Route path="/search" element={
                        <PrivateRoute>
                            <SearchPage />
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
                    <Route path="/seller-profile" element={
                        <PrivateRoute>
                            <SellerProfile />
                        </PrivateRoute>
                    }>
                        <Route index element={<StoreProfile />} />
                        <Route path="store-profile" element={<StoreProfile />} />
                        <Route path="my-products" element={<MyProduct />} />
                        <Route path="selling-products" element={<SellingProduct />} />
                        <Route path="my-order" element={<MyOrderSeller />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter