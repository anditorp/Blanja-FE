import React, { useEffect, useState } from 'react';
import Textfield from '../components/base/textfield/textfield';
import Button from '../components/base/button/button';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '@/configs/redux/action/auth.action';
import { useNavigate } from 'react-router-dom';

const LoginCustomer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [form, setForm] = useState({
        email: '',
        password: '',
        role: 'customer'
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
       const { id, value } = e.target;
       setForm((prevForm) => ({
        ...prevForm,
        [id]: value
       }));
       console.log({ [id]: value });
    };

    const handleRegister = () => {
      navigate('/auth/register');
    };

    const handleLoginCustomer = () => {
      if (!form.email || !form.password) {
        setError('All fields are required');
        return;
      }
      setError('');
      dispatch(loginAction(form.email, form.password, navigate));
    };

    useEffect(() => {
      if (user) {
        navigate('/home');
      }
    }, [user, navigate]);

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
        {error && (
          <div className='flex justify-center text-red-500 pb-5'>
            {error}
          </div>
        )}
        <div className='flex justify-center ml-64 text-red-maroon hover:font-semibold hover:text-orange-500 cursor-pointer'>
          Forgot password?
        </div>
        <div className='flex justify-center py-5'>
          <Button
            name="Login"
            onClick={handleLoginCustomer}
            className="flex justify-center"
          />
        </div>
        <div className='flex justify-center'>
          <p>Don&#39;t have a Tokopedia account?{' '}
          <span onClick={handleRegister} className='text-red-maroon hover:font-semibold hover:text-orange-500 cursor-pointer'>
              Register
          </span>
          </p>
        </div>
    </div>
  );
};

export default LoginCustomer;
