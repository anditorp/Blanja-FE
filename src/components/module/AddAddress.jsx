import React from 'react'
import Button from '../base/Button'
import Input from '../base/Input'
import { Link } from 'react-router-dom'


const AddAddress = () => {
  return (
    <div className='flex flex-col gap-8 items-center'>

      <h2 className='font-semibold text-3xl text-[#222222]'>Add new address</h2>

      <div className='w-full flex flex-col gap-4'>
        <Input label="Save address as (ex : home address, office address)" placeholder='Rumah' />
        <div className='flex gap-8'>
          <Input label="Recipient’s name" placeholder='' />
          <Input label="Recipient's telephone number" placeholder='' />
        </div>
        <div className='flex gap-8'>
          <Input label="Address" placeholder='' />
          <Input label="Postal code" placeholder='' />
        </div>
        <div className='flex gap-8'>
          <Input label="City or subdistrict" placeholder='' />
          <Input className={"invisible"} label="" placeholder='' />
        </div>
        <div className='flex gap-3'>
          <input type="checkbox" name="" id="" />
          <label className='font-normal text-sm text-[#9b9b9b]'>Make it the primary address</label>
        </div>
      </div>

      <div className='w-full flex justify-end gap-5'>
        <Button className={"w-36"} variant="secondary-gray" text="Cancel" />
        <Button className={"w-36"} text="Save" />
      </div>

    </div>
  )
}

export default AddAddress