import React from 'react'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import UserThumbnail from '../../assets/user-thumbnail.png'



const StoreProfile = () => {
    return (
        <div className='w-full flex gap-6'>
            <div className='w-full flex flex-col gap-6'>
                <div className='flex gap-10 items-center'>
                    <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                    <Input label='' placeholder='' />
                </div>

                <div className='flex gap-10 items-center'>
                    <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                    <Input label='' placeholder='' />
                </div>

                <div className='flex gap-10 items-center'>
                    <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                    <Input label='' placeholder='' />
                </div>

                <div className='flex gap-10 items-center'>
                    <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                    <Input label='' placeholder='' />
                </div>

                <Button className={""} text='Save' />
            </div>

            <div className='bg-[#d4d4d4] h-[200px] w-[1px]'></div>

            <div className='flex flex-col items-center gap-5'>
                <img className='size-28 rounded-full object-cover' src={UserThumbnail} alt="" />
                <Button variant='secondary-gray' text='Select Image' />
            </div>
        </div>
    )
}

export default StoreProfile