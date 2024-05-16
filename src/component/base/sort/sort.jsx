import React from 'react';
import './sort.css';
import Sort from '../../../assets/icon/sort.svg'

const Category = (className) => {
  return (
    <div className={`sortstyle flex cursor-pointer ${className}`}>
        <img src={Sort} alt="Sort" />
    </div>
  )
}

export default Category