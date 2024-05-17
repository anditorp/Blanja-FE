import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPrivate from './../hoc/private/headerPrivate';

const mainPage = () => {
  return (
    <div>
        <HeaderPrivate/>
        <Outlet/>
    </div>
  )
}

export default mainPage