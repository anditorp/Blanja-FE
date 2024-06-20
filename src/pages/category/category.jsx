import React from 'react';

import Jacket from '../../assets/category/jacket.svg';
import Pants from '../../assets/category/pants.svg';
import Shoes from '../../assets/category/shoes.svg';
import Shorts from '../../assets/category/shorts.svg';
import Tshirt from '../../assets/category/tshirt.svg';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleCategoryJacket = () => {
    navigate('/category/jacket')
  }

  const handleCategoryShoes = () => {
    navigate('/category/shoes')
  }

  const handleCategoryPants = () => {
    navigate('/category/pants')
  }

  const handleCategoryTshirt = () => {
    navigate('/category/tshirt')
  }

  const handleCategoryShorts = () => {
    navigate('/category/shorts')
  }

  return (
    <div className='py-36'>
        <h1 className='text-6xl font-bold text-center font-metropolis'>Category</h1>
        <p className='text-md text-gray-400 py-5 text-center'>What are you currently looking for</p>
        <div className='flex flex-row justify-center gap-10 py-5'>
        <img onClick={handleCategoryJacket} className='cursor-pointer' src={Jacket} alt="Jacket" />
        <img onClick={handleCategoryShoes} className='cursor-pointer' src={Shoes} alt="Shoes" />
        <img onClick={handleCategoryPants} className='cursor-pointer' src={Pants} alt="Pants" />
        <img onClick={handleCategoryTshirt} className='cursor-pointer' src={Tshirt} alt="Tshirt" />
        <img onClick={handleCategoryShorts} className='cursor-pointer' src={Shorts} alt="Shorts" />
        </div>
    </div>
  )
}

export default CategoryPage