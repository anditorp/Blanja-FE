/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import LogoBlanja from '../../assets/logo/Group 1158.png'
import SearchBar from '../../components/base/search/search';
import Category from '../../components/base/sort/sort';
import Cart from '../../components/base/cart/cart';
import Notification from '../../components/base/notification/notification';
import Mail from '../../components/base/mail/mail';
import Profile from '../../components/base/profile/profile';

import defaultpic from '../../assets/profile/default.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeIcon from '@/components/base/home/home';

const headerPrivate = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const handleCustomerProfile = () => {
    navigate('/customer-profile')
  }

  const handleCart = () => {
    navigate('/mybag');
  }

  const handleHome = () => {
    navigate('/home');
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios({
      method: "GET",
      url: `${import.meta.env.VITE_URL_BLANJA}/customer/profile`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        const result = res.data.data;
        setProfile(result);
        console.log(result, '<<<<<<<<<<<<<<<<<<result');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const profileImage = profile.image ? profile.image : defaultpic;

  return (
    <header className='headerPrivate flex justify-between bg-white shadow-lg py-7 fixed w-full z-40'>
      <div className='flex px-28 gap-10'>
        <img className='absolute top-4' src={LogoBlanja} alt="logoblanja" />
        <div className='flex absolute py-0 px-48 gap-5'>
          <SearchBar />
          <Category />
        </div>
      </div>
      <div className='flex items-center pr-20 gap-8 py-2 z-30'>
        <HomeIcon
          classname="cursor-pointer"
          onClick={handleHome}
        />
        <Cart
          classname="cursor-pointer"
          onClick={handleCart}
        />
        <Notification
          onclick="/"
          classname="cursor-pointer"
        />
        <Mail
          onclick="/"
          classname="cursor-pointer"
        />
        <Profile
          image={profileImage}
          onClick={handleCustomerProfile}
        />
        <div className='bg-orange-600 px-3 py-1 rounded-lg text-white font-semibold hover:bg-orange-500 cursor-pointer' onClick={handleLogout}>
          <p>Log out</p>
        </div>
      </div>
    </header>
  )
}

export default headerPrivate