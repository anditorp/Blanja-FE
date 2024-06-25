/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logoBlanja from '../../assets/logo/Group 1158.png';
import RadioRole from '../../components/base/radio/radioRole';
import LoginCustomer from '../../components/loginCustomer';
import LoginSeller from '../../components/loginSeller';

const Login = () => {
    const [toggle, setToggle] = useState(1);
    const handleToggle = (id) => {
        setToggle(id);
    }
    
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='py-10'>
                <img src={logoBlanja} alt="logoblanja" />
            </div>
            <div className='font-metropolis font-semibold text-lg text-center'>
                <p>Please login with your account</p>
            </div>
            <div className='my-4'>
                <RadioRole handleToggle={handleToggle} />
            </div>
            <div className='w-full flex justify-center'>
                {toggle === 1 ? <LoginCustomer /> : <LoginSeller />}
            </div>
        </div>
    );
}

export default Login;
