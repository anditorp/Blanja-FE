import React, { useState } from 'react';
import Textfield from './../../base/textfield/textfield';
import './formprofile.css';

const FormProfile = () => {
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('1');
  const [month, setmonth] = useState('January');
  const [year, setYear] = useState('1990');

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleDate = (e) => {
    setDay(e.target.value);
  };

  const handleMonth = (e) => {
    setmonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };


  return (
    <div className='flex flex-col bg-white w-208 h-120 relative left-20 top-32 py-5 rounded-md border border-gray-500'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl'>My Profile</h1>
        <p className='py-3 text-gray-400'>Manage your profile information</p>
      </div>
      <hr className='w-176 relative left-5' />
      <div className='relative bottom-5 px-5'>
        <div>
          <label className='relative top-14 text-gray-400'>Name</label>
          <Textfield
            type="text"
            className="w-96 h-10 relative bottom-2 left-32"
          />
        </div>
        <div className='relative bottom-7'>
          <label className='relative top-14 text-gray-400'>Email</label>
          <Textfield
            type="text"
            className="w-96 h-10 relative bottom-2 left-32"
          />
        </div>
        <div className='relative bottom-14'>
          <label className='relative top-14 text-gray-400'>Phone Number</label>
          <Textfield
            type="number"
            className="w-96 h-10 relative bottom-2 left-32"
          />
        </div>
        <form className='relative bottom-14'>
          <label className='relative top-2 text-gray-400'>Gender</label>
          <div className='flex relative bottom-3 pr-72 pl-36'>
            <label className='container'><p className='relative bottom-5 left-5'>Male</p>
            <input 
              type="radio"
              checked="checked"
              name='radio' 
            />
            <span className='checkmark'></span>
          </label>
          <label className='container'><p className='relative bottom-5 left-5'>Female</p>
            <input 
              type="radio"
              checked="checked"
              name='radio' 
            />
            <span className='checkmark'></span>
          </label>
          </div>
          <div className="flex items-center relative bottom-10 right-28 pr-5">
                <label className="mr-4 text-gray-400">Date of birth</label>
                <select value={day} onChange={handleDate} className="mr-2">
                    {[...Array(31).keys()].map(i => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                </select>
                <select value={month} onChange={handleMonth} className="mr-2">
                    {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((month, index) => (
                        <option key={index} value={month}>{month}</option>
                    ))}
                </select>
                <select value={year} onChange={handleYear}>
                    {Array.from({length: 100}, (v, k) => k + 1920).map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </form>
      </div>
    </div>
  )
}

export default FormProfile