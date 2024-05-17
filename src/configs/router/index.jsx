import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login';
import Home from './../../pages/home/home';
import PageLayout from '../../pages/pageLayout';
import MainPage from './../../pages/mainPage';
import Product from '../../pages/product/product';
import Category from '../../pages/category/category';
import MyAccount from '../../pages/custormer/myaccount';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PageLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                </Route>
                <Route element={<MainPage/>}>
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/category" element={<Category />} />
                <Route path="/customer-profile" element={<MyAccount />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter