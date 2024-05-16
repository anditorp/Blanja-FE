import React from 'react';

import Jacket from '../../../assets/category/jacket.svg';
import Pants from '../../../assets/category/pants.svg';
import Shoes from '../../../assets/category/shoes.svg';
import Shorts from '../../../assets/category/shorts.svg';
import Tshirt from '../../../assets/category/tshirt.svg';

const Category = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold'>Category</h1>
        <p className='text-md text-gray-400 py-2'>What are you currently looking for</p>
        <div className='flex flex-row justify-center gap-10 py-5'>
        <img className='cursor-pointer' src={Jacket} alt="Jacket" />
        <img className='cursor-pointer' src={Shoes} alt="Shoes" />
        <img className='cursor-pointer' src={Pants} alt="Pants" />
        <img className='cursor-pointer' src={Tshirt} alt="Tshirt" />
        <img className='cursor-pointer' src={Shorts} alt="Shorts" />
        </div>
    </div>
  )
}

export default Category