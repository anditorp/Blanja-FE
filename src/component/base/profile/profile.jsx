import React from 'react';
import Profile from '../../../assets/icon/profile.svg';

const profile = ({onClick, className}) => {
  return (
    <div className={`${className}`} onClick={onClick}>
        <img className='rounded-full cursor-pointer' src={Profile} alt="Profileimg" />
    </div>
  )
}

export default profile