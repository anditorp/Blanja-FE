/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Textfield from './base/textfield/textfield';
import Button from './base/button/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '@/configs/redux/action/auth.action';

const loginSeller = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
        role: 'store'
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
       setForm((prevForm) => ({
        ...prevForm,
        [id]: value
       }));
       console.log({ [id]: value });
    };

    const HandleRegister = () => {
      navigate('/auth/register')
    }

    const handleLoginSeller = () => {
      dispatch(loginAction(form.email, form.password, form.role));
      navigate('/home')
    }

  return (
    <div>
        <div className='flex justify-center px-105'>
          <Textfield 
              type="email"
              id="email"
              spellCheck={false}
              required
              placeholder="Email"
              className='w-96 h-12'
              value={form.email}
              onChange={handleChange}
          />
        </div>
        <div className='flex justify-center py-5 px-105'>
          <Textfield 
              type="password"
              id="password"
              spellCheck={false}
              required
              placeholder="Password"
              className='w-96 h-12'
              value={form.password}
              onChange={handleChange}
          />
        </div>
        <div className='flex justify-center ml-64 text-red-maroon hover:font-semibold hover:text-orange-500 cursor-pointer'>
        Forgot password?
        </div>
        <div className='flex justify-center py-5'>
          <Button
            name="Login"
            onClick={handleLoginSeller}
            className="flex justify-center"
          />
        </div>
        <div className='flex justify-center'>
        <p>Don&#39;t have a Tokopedia account?{' '} 
        <span onClick={HandleRegister} className='text-red-maroon hover:font-semibold hover:text-orange-500 cursor-pointer'>
            Register
        </span>
        </p>
        </div>
    </div>
  )
}

export default loginSeller