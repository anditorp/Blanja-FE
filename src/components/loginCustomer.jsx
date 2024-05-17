import React, { useState } from 'react'
import Textfield from '../components/base/textfield/textfield';
import Button from '../components/base/button/button';

const loginCustomer = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
       const { id, value } = e.target;
       setForm((prevForm) => ({
        ...prevForm,
        [id]: value
       }));
       console.log({ [id]: value });
    };


    const handleLoginCustomer = () => {
        alert('login success!!')
        console.log('Register customer with', form);
    }

  return (
    <div>
        <div className='flex justify-center'>
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
        <div className='flex justify-center pb-5'>
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
            name="Primary"
            onClick={handleLoginCustomer}
            className="flex justify-center"
          />
        </div>
        <div className='flex justify-center'>
        <p>Don&#39;t have a Tokopedia account?{' '}
        <span className='text-red-maroon hover:font-semibold hover:text-orange-500 cursor-pointer'>
            Register
        </span>
        </p>
        </div>
    </div>
    )
}

export default loginCustomer