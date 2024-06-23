import React from 'react';
import Home from '../../../assets/icon/1489135889.svg';

const HomeIcon = ({classname, onClick}) => {
  return (
    <div className={`${classname}`} onClick={onClick}>
        <img src={Home} alt="home" />
    </div>
  )
}

export default HomeIcon