/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import LogoBlanja from '../../assets/logo/Group 1158.png'
import SearchBar from '../../components/base/search/search';
import Category from '../../components/base/sort/sort';
import Cart from '../../components/base/cart/cart';
import HeaderButton from '../../components/base/button/headerButton';
import ButtonWhite from '../../components/base/button/buttonwhite';
import { useNavigate } from 'react-router-dom';

const headerPublic = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth/login')
  }

  const handleRegister = () => {
    navigate('/auth/register')
  }

  const handleCart = () => {
    alert('Please Login First!!')
    navigate('/auth/login')
  }

  return (
    <header className='flex justify-between bg-white shadow-md py-7 w-full z-50'>
        <div className='flex px-28 gap-10'>
            <img className='absolute top-4' src={LogoBlanja} alt="logoblanja" />
            <div className='flex absolute py-0 px-48 gap-5'>
            <SearchBar/>
            <Category/>
            </div>
        </div>
        <div>
        <Cart
            classname="relative cursor-pointer left-96 py-2"
            onClick={handleCart}
        />
        </div>
        <div className='flex pr-24 gap-5'>
            <HeaderButton
            name="Login"
            className="flex justify-center bg-red-maroon"
            onClick={handleLogin}
          />
           <ButtonWhite
            name="Sign up"
            className="flex justify-center bg-white text-black"
            onClick={handleRegister}
          />
        </div>
    </header>
  )
}

export default headerPublic