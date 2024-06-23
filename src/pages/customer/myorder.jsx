/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Profilebar from '../../components/module/profile/profilebar';
import FormMyOrder from '@/components/module/profile/formmyorder';
import axios from 'axios';
import defaultimage from '../../assets/profile/default.jpg';

const MyOrder = () => {
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

  const profileImage = profile.image ? profile.image : defaultimage;


  return (
    <div className='flex flex-row bg-gray-200 h-full'>
      <Profilebar
      name={profile.name}
      image={profileImage}
      />
      <FormMyOrder/>
    </div>
  )
}

export default MyOrder