import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Textfield from '../../base/textfield/textfield';
import './formprofile.css';
import Button from '@/components/base/button/button';
import UploadImage from '../upload/uploadimage';
import axios from 'axios';
import API from '@/configs/api';

const FormProfile = () => {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Male');
  const [day, setDay] = useState('1');
  const [month, setMonth] = useState('January');
  const [year, setYear] = useState('1990');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    date_of_birth: '',
    image: []
  });

  const getProfile = () => {
    API.get(`/customer/profile`)
      .then((res) => {
        console.log(res, "<<<<<<<<<<<<<res");
        if(res && res.status !== 200){
          console.log('error')
        }
        const result = res.data.data;
        // console.log(result,"<<<<<<<<<<<<<result");
        setForm({
          name: result.name || '',
          // email: result.email || '',
          phone: result.phone || '',
          gender: result.gender || '',
          date_of_birth: result.date_of_birth || '',
          image: result.image || ''
        });
        setGender(result.gender || 'Male');
        const [year, month, day] = result.date_of_birth ? result.date_of_birth.split('-') : ['1990', 'January', '1'];
        setDay(day);
        setMonth(month);
        setYear(year);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleName = (e) => {
    setName(e.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      name: e.target.value
    }))
  }

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   setForm((prevForm) => ({
  //     ...prevForm,
  //     email: e.target.value
  //   }))
  // }

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      phone: e.target.value
    }))
  }

  const handleGender = (e) => {
    setGender(e.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      gender: e.target.value,
    }));
  };

  const handleDay = (e) => {
    setDay(e.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      date_of_birth: `${year}-${month}-${e.target.value}`,
    }));
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      date_of_birth: `${year}-${e.target.value}-${day}`,
    }));
  };

  const handleYear = (e) => {
    setYear(e.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      date_of_birth: `${e.target.value}-${month}-${day}`,
    }));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    API.put('/customer/profile', {
      name: form.name,
      // email: form.email,
      phone: form.phone,
      gender,
      date_of_birth: form.date_of_birth,
      image: form.image,
    })
      .then((res) => {
        console.log(res);
        alert("Update Profile Success!!!");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  const handleImageUpload = (imageUrl) => {
    setForm((prevForm) => ({
      ...prevForm,
      image: imageUrl
    }));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className='flex flex-col bg-white w-208 h-144 relative left-20 top-32 py-5 rounded-md border border-gray-500'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl'>My Profile</h1>
        <p className='py-3 text-gray-400'>Manage your profile information</p>
      </div>
      <hr className='w-192 relative left-5 border border-t-1 border-gray-300' />
      <div className='flex justify-between'>
        <div className='relative bottom-5 px-5'>
          <div>
            <label className='relative top-14 text-gray-400'>Name</label>
            <Textfield
              type="text"
              name="name"
              label=""
              spellCheck={false}
              value={form.name}
              onChange={handleName}
              className="w-96 h-10 relative bottom-2 left-32"
            />
          </div>
          <div className='relative bottom-7'>
            <label className='relative top-14 text-gray-400'>Email</label>
            <Textfield
              type="email"
              name="email"
              label=""
              spellCheck={false}
              value={form.email}
              // onChange={handleEmail}
              className="w-96 h-10 relative bottom-2 left-32"
            />
          </div>
          <div className='relative bottom-14'>
            <label className='relative top-14 text-gray-400'>Phone Number</label>
            <Textfield
              type="number"
              name="phone"
              label=""
              spellCheck={false}
              value={form.phone}
              onChange={handlePhone}
              className="w-96 h-10 relative bottom-2 left-32"
            />
          </div>
          <form onSubmit={handleChange} className='relative bottom-14'>
            <label className='relative top-2 text-gray-400'>Gender</label>
            <div className='flex relative bottom-3 pr-110 pl-36 gap-5'>
              <label className='container'><p className='relative bottom-5 left-5'>Male</p>
                <input
                  type="radio"
                  id='Male'
                  checked={gender === 'Male'}
                  onChange={handleGender}
                  name='gender'
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
                  name='gender'
                  value="Female"
                />
                <span className='checkmark'></span>
              </label>
            </div>
            <div onSubmit={handleSave} className="flex items-center relative bottom-10 right-28 pr-28">
              <label className="mr-4 text-gray-400 z-0">Date of birth</label>
              <select value={day} onChange={handleDay} className="relative right-28 mr-2 border border-gray-300 z-10">
                {[...Array(31).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select value={month} onChange={handleMonth} className="relative right-28 mr-2 border border-gray-300 z-20">
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
              <select value={year} onChange={handleYear} className='relative right-28 border border-gray-300'>
                {Array.from({ length: 105 }, (v, k) => k + 1920).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className='flex relative bottom-7 px-36'>
              <Button
                name="Save"
                className='text-center w-28'
                type="submit"
                onClick={handleSave}
              />
            </div>
          </form>
        </div>
        <hr />
        <div className='flex flex-col absolute right-20 py-10 gap-5'>
          <UploadImage
            onImageChange={handleImageUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default FormProfile;
