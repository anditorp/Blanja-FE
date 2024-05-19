import React, { useState } from 'react'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import api from '../../configs/api'
import { useNavigate } from 'react-router-dom'


const RegisterCustomer = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleRegister = (e) => {
    e.preventDefault()
    // console.log(form);
    api.post('/register/customers', {
      email: form.email,
      password: form.password,
      name: form.name,
    })
      .then((res) => {
        console.log(res.response);
        alert(`Register berhasil dengan email ${form.email} dan password ${form.password}. Silakan Login`)
        navigate('/auth/login')
      })
      .catch((err) => {
        console.log(err.response);
        const error = err.response.data
        alert(`Anda gagal register - ${error.message}`)
      })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='w-full flex flex-col gap-4'>

        <Input
          type='text'
          value={form.name}
          onChange={handleChange}
          name="name"
          label=""
          placeholder="Masukkan nama"
        />
        <Input
          type='email'
          value={form.email}
          onChange={handleChange}
          name="email"
          label=""
          placeholder="Masukkan email"
        />
        <Input
          type='password'
          value={form.password}
          onChange={handleChange}
          name="password"
          label=""
          placeholder="Masukkan password"
        />
      </div>
      <Button className='w-full' onClick={handleRegister} text='Daftar' />
    </div>
  )
}

export default RegisterCustomer