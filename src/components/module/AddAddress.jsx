import React, { useState } from 'react'
import Button from '../base/Button'
import Input from '../base/Input'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../configs/api'



const AddAddress = ({ onClose }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    save_address: "",
    recipient_name: "",
    recipient_phone: "",
    recipient_address: "",
    postal_code: "",
    city: ""
  })

  const handleAddAddress = (e) => {
    e.preventDefault()
    // console.log(form);
    api.post('/address', {
      save_address: form.save_address,
      recipient_name: form.recipient_name,
      recipient_phone: form.recipient_phone,
      recipient_address: form.recipient_address,
      postal_code: form.postal_code,
      city: form.city
    })
      .then((res) => {
        console.log(res);
        alert(`Add Address Success`)
        onClose()
        resetForm()
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message)
      })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setForm({
      save_address: "",
      recipient_name: "",
      recipient_phone: "",
      recipient_address: "",
      postal_code: "",
      city: ""
    });
  };

  return (
    <div className='flex flex-col gap-8 items-center'>

      <h2 className='font-semibold text-3xl text-[#222222]'>Add new address</h2>

      <div className='w-full flex flex-col gap-4'>
        <Input
          type='text'
          value={form.save_address}
          onChange={handleChange}
          name="save_address"
          label="Save address as (ex : home address, office address)"
          placeholder="Rumah"
        />
        <div className='flex gap-8'>
          <Input
            type='text'
            value={form.recipient_name}
            onChange={handleChange}
            name="recipient_name"
            label="Recipient’s name"
            placeholder=""
          />
          <Input
            type='tel'
            value={form.recipient_phone}
            onChange={handleChange}
            name="recipient_phone"
            label="Recipient's telephone number"
            placeholder=""
          />
        </div>
        <div className='flex gap-8'>
          <Input
            type='text'
            value={form.recipient_address}
            onChange={handleChange}
            name="recipient_address"
            label="Address"
            placeholder=""
          />
          <Input
            type='text'
            value={form.postal_code}
            onChange={handleChange}
            name="postal_code"
            label="Postal code"
            placeholder=""
          />
        </div>
        <Input
          type='tel'
          value={form.city}
          onChange={handleChange}
          name="city"
          label="City or subdistrict"
          placeholder=""
        />
        {/* <div className='flex gap-3'>
          <input type="checkbox" name="" id="" />
          <label className='font-normal text-xs text-[#9EA0A5] text-left'>Make it the primary address</label>
        </div> */}
      </div>

      <div className='w-full flex justify-end gap-5'>
        <Button className={"w-36"} variant="secondary-gray" text="Cancel" onClick={onClose} />
        <Button className={"w-36"} text="Save" onClick={handleAddAddress} />
      </div>

    </div>
  )
}

export default AddAddress