import React, { useState } from 'react';
import Modal from '@/components/base/Modal';
import AddNewAddress from '../pop up/addnewaddress';

const FormShipping = ({name, address, onChange, ...props}) => {
  const [openModal, setOpenModal] = useState(null);
  
  const handleOpenModal = (modalType) => {
    setOpenModal(modalType);
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  // const handleChangeShipping = () => {
  //   alert('Add New Address Success!! ')
  // }

  return (
    <div className='flex flex-col bg-white w-208 h-144 relative left-20 top-32 py-5 rounded-md border border-gray-500'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl'>Choose another address</h1>
        <p className='py-3 text-gray-400'>Manage your shipping address</p>
      </div>
      <hr className='w-192 relative left-5 border-t-2 border-gray-300' />
      <div className='cursor-pointer border border-gray-400 border-dashed w-144 h-20 relative top-5 left-28 py-5 text-center'>
      <button 
        className='font-semibold text-2xl text-gray-400'
        onClick={() => handleOpenModal('AddNewAddress')}>
          Add new address
      </button>
      </div>
      <div className='border border-red-maroon rounded-lg w-144 h-48 relative top-14 left-28 py-12 px-5'>
      <label className='relative z-0 bottom-8 right-4'>{name}</label>
      <p className='relative bottom-5'>{address}</p>
      <button
       className='text-red-maroon font-semibold text-lg'
       onClick={() => handleOpenModal('ChangeAddress')}
      >
        Change address
      </button>
      </div>

      <Modal open={openModal === 'AddNewAddress'} onClose={handleCloseModal}>
        <AddNewAddress />
      </Modal>

      <Modal open={openModal === 'ChangeAddress'} onClose={handleCloseModal}>
        <AddNewAddress />
      </Modal>
    </div>
  )
}

export default FormShipping