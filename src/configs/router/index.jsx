import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginCustomer from '../../pages/login/loginCustomer';
// import LoginSeller from '../../pages/login/loginSeller';
import Login from '../../pages/login/login';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter