import React, { useEffect, useState } from 'react'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import UserThumbnail from '../../assets/user-thumbnail.png'
import api from '../../configs/api'


const StoreProfile = () => {
    const [form, setForm] = useState({
        store_name: "",
        email: "",
        phone: "",
        store_description: "",
    })

    const getProfile = () => {
        api.get(`/store/profile`)
            .then((res) => {
                console.log(res);
                alert("Get Profile Successful")
                const result = res.data.data
                // setProfile(result)
                setForm({
                    store_name: result.store_name || '',
                    email: result.email || '',
                    phone: result.phone || '',
                    store_description: result.store_description || '',
                })

            })
            .catch((err) => {
                console.log(err.response);
                alert(err.response.data.message);
            })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        // console.log(form);
        api.put('/store/profile', {
            store_name: form.store_name,
            email: form.email,
            phone: form.phone,
            store_description: form.store_description,
        })
            .then((res) => {
                console.log(res);
                alert(`Update Profile Success`)

            })
            .catch((err) => {
                console.log(err.response);
                alert(err.response.data.message)
            })
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div className='flex flex-col gap-6'>
            <div className='bg-[#d4d4d4] h-[1px] w-full'></div>

            <div className='w-full flex gap-6'>

                <div className='flex flex-col gap-6 w-4/5'>
                    <div className='flex gap-10 items-center'>
                        <p className='font-medium text-sm text-[#9b9b9b] w-1/4 text-right'>Store name</p>
                        <Input
                            type='text'
                            value={form.store_name}
                            onChange={handleChange}
                            name="store_name"
                            label=""
                            placeholder="Store name"
                        />
                    </div>

                    <div className='flex gap-10 items-center'>
                        <p className='font-medium text-sm text-[#9b9b9b] w-1/4 text-right'>Email</p>
                        <Input
                            type='text'
                            value={form.email}
                            onChange={handleChange}
                            name="email"
                            label=""
                            placeholder="Email"
                            disabled
                        />
                    </div>

                    <div className='flex gap-10 items-center'>
                        <p className='font-medium text-sm text-[#9b9b9b] w-1/4 text-right'>Phone Number</p>
                        <Input
                            type='text'
                            value={form.phone}
                            onChange={handleChange}
                            name="phone"
                            label=""
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className='flex gap-10 items-center'>
                        <p className='font-medium text-sm text-[#9b9b9b] w-1/4 text-right'>Store Description</p>
                        <Input
                            type='text'
                            value={form.store_description}
                            onChange={handleChange}
                            name="store_description"
                            label=""
                            placeholder="Store Description"
                        />
                    </div>

                    <Button className={"w-32"} text='Save' onClick={handleSave} />
                </div>

                <div className='bg-[#d4d4d4] h-[200px] w-[1px]'></div>

                <div className='flex flex-col items-center gap-5 w-1/5'>
                    <img className='size-28 rounded-full object-cover' src={UserThumbnail} alt="" />
                    <Button variant='secondary-gray' text='Select Image' />
                </div>
            </div>

        </div>
    )
}

export default StoreProfile