import React from 'react'

const FormContainer = ({children}) => {
    return (
        <div className='bg-white p-8 flex flex-col gap-6 rounded-md container'>

            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl text-[#222222]'>My profile store</h1>
                <p className='font-medium text-sm text-[#9b9b9b]'>Manage your profile information</p>
            </div>

            <div>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-base text-[#DB3022]'>All items</p>
                        <div className='h-[4px] w-full bg-[#DB3022]'></div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-base text-[#9b9b9b]'>All items</p>
                        <div className='h-[4px] w-full bg-[#9b9b9b] invisible'></div>
                    </div>
                </div>

                <div className='bg-[#d4d4d4] h-[1px] w-full'></div>
            </div>

            <div className='flex gap-20'>

                {children}

            </div>

        </div>
    )
}

export default FormContainer