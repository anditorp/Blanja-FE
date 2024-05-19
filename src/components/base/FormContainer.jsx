import React from 'react'

const FormContainer = ({ children, title='Title', subtitle='Subtitle'}) => {
    return (
        <div className='bg-white p-8 flex flex-col gap-6 rounded-md'>

            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl text-[#222222]'>{title}</h1>
                <p className='font-medium text-sm text-[#9b9b9b]'>{subtitle}</p>
            </div>

            <div className='flex gap-20'>

                {children}

            </div>

        </div>
    )
}

export default FormContainer