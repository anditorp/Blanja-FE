/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Modal from '@/components/base/Modal';
import AddNewAddress from '../pop up/addnewaddress';
import axios from 'axios';
import ChangeAddress from '../pop up/changeaddress';

const FormShipping = () => {
  const [openModal, setOpenModal] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [idAddress, setIdAddress] = useState(null);

  const handleOpenModal = (modalType, idAddress) => {
    setOpenModal(modalType);
    setIdAddress(idAddress)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  const handleDeleteAddress = (id) => {
    const token = localStorage.getItem('token');
    axios({
      method: 'DELETE',
      url: `${import.meta.env.VITE_URL_BLANJA}/address/${id}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      setAddresses((prevAddresses) => prevAddresses.filter(address => address.address_id !== id));
      alert('Delete Address Successful!');
    })
    .catch((err) => {
      console.log(err);
      alert('Failed to delete address.');
    });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios({
      method: "GET",
      url: `${import.meta.env.VITE_URL_BLANJA}/address`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      const result = res.data.data;
      setAddresses(result);
      console.log(result, '<<<<<<<<<<<<<<<<<<result');
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className='flex flex-col bg-white w-208 h-full relative left-20 top-32 py-5 rounded-md border border-gray-500'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl'>Choose another address</h1>
        <p className='py-3 text-gray-400'>Manage your shipping address</p>
      </div>
      <hr className='w-192 relative left-5 border-t-2 border-gray-300' />
      <div className='cursor-pointer border border-gray-400 border-dashed w-144 h-20 relative top-3 left-28 py-5 text-center'>
        <button
          className='font-semibold text-2xl text-gray-400'
          onClick={() => handleOpenModal('AddNewAddress')}>
          Add new address
        </button>
      </div>
      {addresses.length > 0 ? (
        addresses.map((address) => (
          <div
            key={address.address_id}
            className='border border-red-maroon rounded-lg w-144 h-40 relative top-6 left-28 py-12 px-5 mb-4 z-0'>
            <label className='relative z-0 bottom-8 right-4'>{address.recipient_name}</label>
            <p className='relative bottom-5'>{address.recipient_address}</p>
            <div className='flex gap-5'>
              <button
                className='text-red-maroon font-semibold text-lg'
                onClick={() => handleOpenModal('ChangeAddress',address.address_id)}
              >
                Change address
              </button>
              <button
                className='text-red-maroon font-semibold text-lg'
                onClick={() => handleDeleteAddress(address.address_id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className='text-center py-5 text-2xl'>
          <p>No Address Available</p>
        </div>
      )}

      <Modal open={openModal === 'AddNewAddress'} onClose={handleCloseModal}>
        <AddNewAddress />
      </Modal>

      <Modal open={openModal === 'ChangeAddress'} onClose={handleCloseModal}>
        <ChangeAddress address={idAddress} />
      </Modal>
    </div>
  )
}

export default FormShipping;
