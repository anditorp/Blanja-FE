import React, { useState } from 'react';
import Textfield from '../../base/textfield/textfield';
import './formprofile.css';
import Button from '@/components/base/button/button';
import ButtonWhite from '@/components/base/button/buttonwhite';

const FormProfile = ({ img }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('1');
  const [month, setmonth] = useState('January');
  const [year, setYear] = useState('1990');

  const handleGender = (e) => {
    setGender(e.target.value);
    console.log(handleGender, "<<<<<<<<<<<<<<<<<<gender");
  };

  const handleDate = (e) => {
    setDay(e.target.value);
    console.log(handleDate, "<<<<<<<<<<<<<<Date");
  };

  const handleMonth = (e) => {
    setmonth(e.target.value);
    console.log(handleMonth, "<<<<<<<<<<<<<Month");
  };

  const handleYear = (e) => {
    setYear(e.target.value);
    console.log(handleYear, "<<<<<<<<<<<<<Year");
  };

  const handleChangeProfile = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value
    }));
    console.log({ [id]: value });
  };

  const handleSubmitProfile = () => {
    alert('Submit Success!!')
    console.log('Submit with', form, gender, day, month, year);
  }


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
              type="name"
              id="name"
              spellCheck={false}
              value={form.name}
              onChange={handleChangeProfile}
              className="w-96 h-10 relative bottom-2 left-32"
            />
          </div>
          <div className='relative bottom-7'>
            <label className='relative top-14 text-gray-400'>Email</label>
            <Textfield
              type="email"
              id="email"
              spellCheck={false}
              value={form.email}
              onChange={handleChangeProfile}
              className="w-96 h-10 relative bottom-2 left-32"
            />
          </div>
          <div className='relative bottom-14'>
            <label className='relative top-14 text-gray-400'>Phone Number</label>
            <Textfield
              type="number"
              id="phone"
              spellCheck={false}
              value={form.name}
              onChange={handleChangeProfile}
              className="w-96 h-10 relative bottom-2 left-32"
            />
          </div>
          <form className='relative bottom-14'>
            <label className='relative top-2 text-gray-400'>Gender</label>
            <div className='flex relative bottom-3 pr-110 pl-36 gap-5'>
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
            <div className="flex items-center relative bottom-10 right-28 pr-28">
              <label className="mr-4 text-gray-400 z-0">Date of birth</label>
              <select value={day} onChange={handleDate} className="relative right-28 mr-2 border border-gray-300 z-10">
                {[...Array(31).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select value={month} onChange={handleMonth} className="relative right-28 mr-2 border border-gray-300 z-20">
                {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
              <select value={year} onChange={handleYear} className='relative right-28 border border-gray-300'>
                {Array.from({ length: 100 }, (v, k) => k + 1920).map(year => (
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
          <img src={img} alt="img" className='w-28 h-28 rounded-full relative left-2' />
          <ButtonWhite
            name="Select Image"
            className="text-nowrap w-32 text-center"
            onClick={handleSubmitProfile}
          />
        </div>
      </div>
    </div>
  )
}

export default FormProfile