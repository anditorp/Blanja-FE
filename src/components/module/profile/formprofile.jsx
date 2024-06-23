/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Textfield from '../../base/textfield/textfield';
import './formprofile.css';
import Button from '@/components/base/button/button';
import UploadImage from '../upload/uploadimage';
import axios from 'axios';

const FormProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birthDate: '',
    image: []
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    image: []
  });
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleDate = (e) => {
    setDay(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleChangeProfile = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value
    }));
    console.log({ [id]: value });
  };

  const handleSubmitProfile = async () => {
    try {
      const birthDate = year && month && day ? `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}` : null;
      const data = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        gender,
        image: form.image,
        date_of_birth: birthDate
      };

      const token = localStorage.getItem('token');
      const response = await axios.put(`${import.meta.env.VITE_URL_BLANJA}/customer/profile`, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response);
      if (response.status === 200) {
        alert('Submit Success!!');
        const updatedUserData = response.data.data;
        setUserData(updatedUserData);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Submit Failed!!');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_URL_BLANJA}/customer/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const result = response.data.data;
        console.log(result, "<<<<<<<<<<<<<<<<<<<result");
        setUserData(result);
        setForm({
          name: result.name,
          email: result.email,
          phone: result.phone,
          image: result.image || [],
        });
        setGender(result.gender);
        
        if (result.date_of_birth) {
          const birthDate = new Date(result.date_of_birth);
          setDay(birthDate.getDate().toString());
          setMonth((birthDate.getMonth() + 1).toString());
          setYear(birthDate.getFullYear().toString());
        } else {
          setDay('');
          setMonth('');
          setYear('');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col bg-white w-208 h-160 relative left-20 top-32 py-5 rounded-md border border-gray-500 z-0'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl'>My Profile</h1>
        <p className='py-3 text-gray-400'>Manage your profile information</p>
      </div>
      <hr className='w-192 relative left-5 border border-t-1 border-gray-300' />
      <div className='flex justify-between'>
        <div className='relative bottom-10'>
          <div>
            <label className='relative top-14 text-gray-400'>Name</label>
            <Textfield
              type="text"
              id="name"
              spellCheck={false}
              value={form.name}
              onChange={handleChangeProfile}
              className="w-96 h-10 relative top-5 left-20"
            />
          </div>
          <div>
            <label className='relative top-14 text-gray-400'>Email</label>
            <Textfield
              type="email"
              id="email"
              spellCheck={false}
              value={form.email}
              onChange={handleChangeProfile}
              className="w-96 h-10 relative top-5 left-20"
              disabled
            />
          </div>
          <div>
            <label className='relative top-14 text-gray-400'>Phone Number</label>
            <Textfield
              type="number"
              id="phone"
              spellCheck={false}
              value={form.phone}
              onChange={handleChangeProfile}
              className="w-96 h-10 relative top-5 left-20"
            />
          </div>
          <form className='relative top-10'>
            <label className='relative top-2 text-gray-400'>Gender</label>
            <div className='flex relative bottom-3 px-56 gap-5'>
              <label className='container'><p className='relative bottom-5 left-5'>Male</p>
                <input
                  type="radio"
                  id='Male'
                  checked={gender === 'Male'}
                  onChange={handleGender}
                  name='radio'
                  value="Male"
                />
                <span className='checkmark'></span>
              </label>
              <label className='container'><p className='relative bottom-5 left-5'>Female</p>
                <input
                  type="radio"
                  id='Female'
                  checked={gender === 'Female'}
                  onChange={handleGender}
                  name='radio'
                  value="Female"
                />
                <span className='checkmark'></span>
              </label>
            </div>
            <div className="flex items-center relative bottom-10 right-20 pr-28 z-10">
              <label className="mr-4 text-gray-400 z-0">Date of birth</label>
              <select value={day} onChange={handleDate} className="relative mr-2 border border-gray-300 z-10">
                <option value="">Day</option>
                {[...Array(31).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select value={month} onChange={handleMonth} className="relative mr-2 border border-gray-300 z-20">
                <option value="">Month</option>
                {[...Array(12).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select value={year} onChange={handleYear} className='relative border border-gray-300'>
                <option value="">Year</option>
                {Array.from({ length: 100 }, (v, k) => k + 1950).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className='flex relative bottom-7 px-36'>
              <Button
                name="Save"
                className='text-center w-28'
                onClick={handleSubmitProfile}
              />
            </div>
          </form>
        </div>
        <hr />
        <div className='flex flex-col absolute right-20 py-10 gap-5'>
          <UploadImage />
        </div>
      </div>
    </div>
  );
}

export default FormProfile;
