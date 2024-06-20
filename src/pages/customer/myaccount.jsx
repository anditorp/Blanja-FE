import React, { useEffect, useState } from 'react';
import Profilebar from '../../components/module/profile/profilebar';
import FormProfile from '../../components/module/profile/formprofile';
import axios from 'axios';
import defaultimage from '../../assets/profile/default.jpg';

const MyAccount = () => {
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
    <div className='flex flex-row bg-gray-200 h-208'>
      <Profilebar
        name={profile.name}
        image={profileImage}
      />
      <FormProfile
        img={profileImage}
      />
    </div>
  );
};

export default MyAccount;
