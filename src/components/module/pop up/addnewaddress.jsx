import React from 'react';
import Textfield from '@/components/base/textfield/textfield';
import ButtonWhite from '@/components/base/button/buttonwhite';

const AddNewAddress = () => {
  return (
    <div className='h-128'>
        <div className='text-center'>
            <h1 className='font-semibold text-2xl'>Add New Address</h1>
        </div>
        <div className='text-nowrap text-gray-400'>
            <Textfield
            type="text"
            className="h-10"
            label="Save address as (ex : home address, office address)"
            placeholder="Home"
            />
        </div>
        <div className='flex flex-row justify-between'>
        <div className='text-nowrap text-gray-400 py-2'>
            <Textfield
            type="text"
            className="h-10 w-64"
            label="Recipient’s name"
            />
        </div>
        <div className='text-nowrap text-gray-400 py-2'>
            <Textfield
            type="number"
            className="h-10 w-72"
            label="Recipient's telephone number"
            />
        </div>
        </div>
        <div className='flex flex-row justify-between'>
        <div className='text-nowrap text-gray-400'>
            <Textfield
            type="text"
            className="h-10 w-64"
            label="Address"
            />
        </div>
        <div className='text-nowrap text-gray-400'>
            <Textfield
            type="number"
            className="h-10 w-72"
            label="Postal code"
            />
        </div>
        </div>
        <div className='text-nowrap text-gray-400'>
            <Textfield
            type="text"
            className="h-10 w-64"
            label="City or Subdistrict"
            />
        </div>
        <div className='text-nowrap text-gray-400 py-2'>
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Make it the primary address</span>
            </label>
            <div className='flex flex-row gap-5 relative left-80 bottom-10 text-center'>
            <ButtonWhite 
                className="w-28"
                name="Cancel"
                />
            <ButtonWhite 
                className="bg-red-maroon w-28 text-white"
                name="Save"
                />
        </div>
        </div>
    </div>
  )
}

export default AddNewAddress