import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPublic from '../hoc/public/headerPublic';

const PageLayout = (props) => {
  return (
    <div>
        <HeaderPublic/>
        <Outlet/>
    </div>
  )
}

export default PageLayout