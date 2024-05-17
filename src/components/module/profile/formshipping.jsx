import React from 'react';

const FormShipping = ({name, address, onChange, ...props}) => {
  const handleChangeShipping = () => {
    alert('Add New Address Success!! ')
  }

  return (
    <div className='flex flex-col bg-white w-208 h-144 relative left-20 top-32 py-5 rounded-md border border-gray-500'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl'>Choose another address</h1>
        <p className='py-3 text-gray-400'>Manage your shipping address</p>
      </div>
      <hr className='w-192 relative left-5 border-t-2 border-gray-300' />
      <div onClick={handleChangeShipping} className='cursor-pointer border border-gray-400 border-dashed w-144 h-20 relative top-5 left-28 py-5 text-center'>
      <h1 className='font-semibold text-2xl text-gray-400'>Add new address</h1>
      </div>
      <div className='border border-red-maroon rounded-lg w-144 h-48 relative top-14 left-28 py-12 px-5'>
      <label className='relative bottom-8 right-4'>{name}</label>
      <p className='relative bottom-5'>{address}</p>
      <button
       className='text-red-maroon font-semibold text-lg'
       onClick={onChange}
      >
        Change address
      </button>
      </div>
    </div>
  )
}

export default FormShipping