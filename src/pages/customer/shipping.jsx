import React, { useEffect, useState } from 'react';
import Profilebar from '../../components/module/profile/profilebar';
import profileimg from '../../../src/assets/profile/image profile.svg';
import FormShipping from '@/components/module/profile/formshipping';
import defaultimage from '../../assets/profile/default.jpg';
import axios from 'axios';

const ShippingPage = () => {
  const [profile, setProfile] = useState({});

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
  
  const handleAddress = () => {
    alert('Change Address Success!!!')
  };

  const profileImage = profile.image ? profile.image : defaultimage;

  return (
    <div className='flex flex-row bg-gray-200 h-auto'>
      <Profilebar
      name={profile.name}
      image={profileImage}
      />
      <FormShipping
      onChange={handleAddress}
      />
    </div>
  )
}

export default ShippingPage