import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login';
import Home from './../../pages/home/home';
import PageLayout from '../../pages/pageLayout';
import MainPage from './../../pages/mainPage';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PageLayout/>}>
                <Route path="/" element={<Home />} />
                </Route>
                <Route element={<MainPage/>}>
                <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter