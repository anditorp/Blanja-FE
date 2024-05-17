import React from 'react'
import Button from '../base/Button'
import Input from '../base/Input'
import { Link } from 'react-router-dom'
import Mastercard from '../../assets/mastercard.svg'


const Payment = () => {
  return (
    <div className='flex flex-col gap-8 items-center'>

      <h2 className='font-semibold text-3xl text-[#222222]'>Payment</h2>

      <div className='w-full flex flex-col gap-4'>

        <p className='font-semibold text-base text-[#222222]'>Payment method</p>

        <div className='flex flex-col gap-8'>

          <div className='flex justify-between'>
            <div className='flex gap-5 items-center'>
              <img className='size-10 object-fil' src={Mastercard} alt="" />
              <p className='font-semibold text-base text-[#222222]'>Mastercard</p>
            </div>
            <input type="checkbox" name="" id="" />
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-5 items-center'>
              <img className='size-10 object-fill' src={Mastercard} alt="" />
              <p className='font-semibold text-base text-[#222222]'>Mastercard</p>
            </div>
            <input type="checkbox" name="" id="" />
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-5 items-center'>
              <img className='size-10 object-fill' src={Mastercard} alt="" />
              <p className='font-semibold text-base text-[#222222]'>Mastercard</p>
            </div>
            <input type="checkbox" name="" id="" />
          </div>

        </div>

      </div>

      <div className='h-1 bg-[#f4f4f4] w-full'></div>

      <div className='w-full flex flex-col gap-4'>

        <p className='font-semibold text-base text-[#222222]'>Payment method</p>

        <div className='flex flex-col gap-3'>

          <div className='flex justify-between items-center'>
            <p className='font-medium text-base text-[#9b9b9b]'>Order</p>
            <p className='font-semibold text-lg text-[#222222]'>$ 40.0</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-medium text-base text-[#9b9b9b]'>Delivery</p>
            <p className='font-semibold text-lg text-[#222222]'>$ 5.0</p>
          </div>

        </div>

      </div>

      <div className='w-full flex justify-between items-center'>
        <div className='flex flex-col'>
          <p className='font-semibold text-base text-[#222222]'>Shopping summary</p>
          <p className='font-semibold text-lg text-[#DB3022]'>$ 45.0</p>
        </div>
        <Button className={"w-32"} text="Buy" />
      </div>

    </div>
  )
}

export default Payment