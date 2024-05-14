import React from 'react'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'

const RegisterCustomer = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='w-full flex flex-col gap-4'>
        <Input label='' placeholder='Name'/>
        <Input label='' placeholder='Email'/>
        <Input label='' placeholder='Password'/>
      </div>
      <Button className='w-full' />
    </div>
  )
}

export default RegisterCustomer