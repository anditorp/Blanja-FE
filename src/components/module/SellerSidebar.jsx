import React, { useEffect, useState } from 'react';
import UserThumbnail from '../../assets/user-thumbnail.png';
import Edit from '../../assets/edit.svg';
import StoreIcon from '../../assets/store.svg';
import ProductIcon from '../../assets/product.svg';
import OrderIcon from '../../assets/order.svg';
import ChevronUp from '../../assets/chevron-up-active.svg';
import ChevronDown from '../../assets/chevron-down-inactive.svg';
import api from '../../configs/api'
import { NavLink, useNavigate } from 'react-router-dom';


const SellerSidebar = () => {
  const [submenus, setSubmenus] = useState({});
  const toggleSubmenu = (key) => {
    setSubmenus((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const [profile, setProfile] = useState({})

  const getProfile = () => {
    api.get(`/store/profile`)
      .then((res) => {
        console.log(res);
        alert("Get Profile Successful")
        const result = res.data.data

        setProfile(result)

      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className='container flex flex-col gap-20'>

      <div className='flex gap-4 items-center'>
        <img className='w-16 h-16 rounded-full object-cover' src={profile.image || UserThumbnail} alt="User" />
        <div className='flex flex-col gap-1'>
          <p className='font-semibold text-base text-[#222222]'>{profile.store_name || 'Johanes Mikael'}</p>
          <div className='flex gap-2 items-center'>
            <img src={Edit} alt="Edit" />
            <p className='font-medium text-sm text-[#9b9b9b] cursor-pointer'>Ubah profile</p>
          </div>
        </div>
      </div>

      <nav className='flex flex-col gap-5'>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-4 items-center cursor-pointer' onClick={() => toggleSubmenu('Store')}>
            <img className='size-8' src={StoreIcon} alt="Store" />
            <p className='font-medium text-sm text-[#222222] w-full'>Store</p>
            <img className='w-5 h-5' src={submenus['Store'] ? ChevronUp : ChevronDown} alt="Chevron" />
          </div>
          {submenus['Store'] && (
            <div className='flex flex-col gap-2 ml-12'>
              <NavLink to="/seller-profile/store-profile" className={({ isActive }) => isActive ? 'font-normal text-sm text-[#222222] w-full active' : 'font-normal text-sm text-[#222222] w-full'}>
                Store profile
              </NavLink>
            </div>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-4 items-center cursor-pointer' onClick={() => toggleSubmenu('Product')}>
            <img className='size-8' src={ProductIcon} alt="Product" />
            <p className='font-medium text-sm text-[#222222] w-full'>Product</p>
            <img className='w-5 h-5' src={submenus['Product'] ? ChevronUp : ChevronDown} alt="Chevron" />
          </div>
          {submenus['Product'] && (
            <div className='flex flex-col gap-2 ml-12'>
              <NavLink to="/seller-profile/my-products" className={({ isActive }) => isActive ? 'font-normal text-sm text-[#222222] w-full active' : 'font-normal text-sm text-[#222222] w-full'}>
                My products
              </NavLink>
              <NavLink to="/seller-profile/selling-products" className={({ isActive }) => isActive ? 'font-normal text-sm text-[#222222] w-full active' : 'font-normal text-sm text-[#222222] w-full'}>
                Selling products
              </NavLink>
            </div>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-4 items-center cursor-pointer' onClick={() => toggleSubmenu('Order')}>
            <img className='size-8' src={OrderIcon} alt="Order" />
            <p className='font-medium text-sm text-[#222222] w-full'>Order</p>
            <img className='w-5 h-5' src={submenus['Order'] ? ChevronUp : ChevronDown} alt="Chevron" />
          </div>
          {submenus['Order'] && (
            <div className='flex flex-col gap-2 ml-12'>
              <NavLink to="/seller-profile/my-order" className={({ isActive }) => isActive ? 'font-normal text-sm text-[#222222] w-full active' : 'font-normal text-sm text-[#222222] w-full'}>
                My order
              </NavLink>
            </div>
          )}
        </div>

      </nav>

    </div>
  );
};

export default SellerSidebar;