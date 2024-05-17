import React from 'react';
import LogoBlanja from '../../assets/logo/Group 1158.png'
import SearchBar from '../../components/base/search/search';
import Category from '../../components/base/sort/sort';
import Cart from '../../components/base/cart/cart';
import Notification from '../../components/base/notification/notification';
import Mail from '../../components/base/mail/mail';
import Profile from '../../components/base/profile/profile';

const headerPrivate = (props) => {
  return (
    <header className='headerPrivate flex justify-between bg-white shadow-lg py-7 absolute w-full'>
        <div className='flex px-28 gap-10'>
            <img className='absolute top-4' src={LogoBlanja} alt="logoblanja" />
            <div className='flex absolute py-0 px-48 gap-5'>
            <SearchBar/>
            <Category className=""/>
            </div>
        </div>
        <div>
        <Cart
            classname="relative cursor-pointer left-96 py-3 pl-10"
        />
        </div>
        <div className='flex items-center pr-24 gap-8 py-2'>
            <Notification
            onclick="/"
            classname="cursor-pointer"
            />
            <Mail
             onclick="/"
             classname="cursor-pointer"
            />
            <Profile/>
        </div>
    </header>
  )
}

export default headerPrivate