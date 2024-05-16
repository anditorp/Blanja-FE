import React from 'react';
import Carousel from '../../component/module/slider/carousel';
import Category from '../../component/module/category/category';
import New from '../../component/module/new/new';
import Popular from '../../component/module/popular/popular';

const Home = () => {
  return (
    <div className='py-10'>
      <Carousel/>
      <div className='flex py-10 px-16'>
        <Category/>
      </div>
      <div className='flex px-16'>
        <New/>
      </div>
      <div className='flex py-5 px-16'>
        <Popular/>
      </div>
    </div>
  )
}

export default Home