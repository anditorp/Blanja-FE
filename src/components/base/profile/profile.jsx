import React from 'react';

const profile = ({onClick, className, image}) => {
  return (
    <div className={`${className}`} onClick={onClick}>
        <img className='w-9 h-9 rounded-full object-cover cursor-pointer' src={image} alt="Profileimg" />
    </div>
  )
}

export default profile