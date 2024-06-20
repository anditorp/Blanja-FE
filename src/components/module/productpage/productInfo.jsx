/* eslint-disable react/prop-types */
import React from 'react'

const ProductInfo = ({products}) => {
  return (
    <div>
         <h1 className='text-2xl font-semibold'>Informasi Produk</h1>
         <div className='py-10'>
            <p className='text-xl font-semibold'>Condition</p>
            <p className='text-xl font-semibold text-red-maroon'>{products.condition || 'New'}</p>
         </div>
         <div>
         <h1 className='text-2xl font-semibold'>Description</h1>
         <p className='py-5 text-gray-400 text-wrap'>
          {products.description}
            </p>
         </div>
         <div>
         </div>
    </div>
  )
}

export default ProductInfo