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

const HeaderPrivate = () => {
  const [profile, setProfile] = useState({});
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleCheckRole = () => {
    if (role === 'customer') {
      navigate('/customer-profile');
    } else if (role === 'store') {
      navigate('/seller-profile');
    }
  };

  const handleCart = () => {
    navigate('/mybag');
  };

  const handleHome = () => {
    navigate('/home');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.get(`${import.meta.env.VITE_URL_BLANJA}/auth/check-roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const userRole = res.data.data.role;
      setRole(userRole);

      if (userRole === 'customer') {
        return axios.get(`${import.meta.env.VITE_URL_BLANJA}/customer/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else if (userRole === 'store') {
        return axios.get(`${import.meta.env.VITE_URL_BLANJA}/store/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    })
    .then((res) => {
      if (res) {
        setProfile(res.data.data);
      }
    })
    .catch((err) => {
      console.error(err);
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
          className="cursor-pointer"
          onClick={handleHome}
        />
        <Cart
          className="cursor-pointer"
          onClick={handleCart}
        />
        <Notification
          onclick="/"
          className="cursor-pointer"
        />
        <Mail
          onclick="/"
          className="cursor-pointer"
        />
        <Profile
          image={profileImage}
          onClick={handleCheckRole}
        />
        <div className='bg-orange-600 px-3 py-1 rounded-lg text-white font-semibold hover:bg-orange-500 cursor-pointer' onClick={handleLogout}>
          <p>Log out</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderPrivate;
