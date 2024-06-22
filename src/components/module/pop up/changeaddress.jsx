import React, { useState, useEffect } from 'react';
import Textfield from '@/components/base/textfield/textfield';
import ButtonWhite from '@/components/base/button/buttonwhite';
import axios from 'axios';

const ChangeAddress = ({address}) => {
    const [form, setForm] = useState({
        save_address: '',
        recipient_name: '',
        recipient_phone: '',
        recipient_address: '',
        postal_code: '',
        city: '',
        primary: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put(`${import.meta.env.VITE_URL_BLANJA}/address/${address}`, form, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Update data success!!");
        } catch (error) {
            console.log('Error updating address:', error);
        }
    };

    return (
        <div className='h-128'>
            <div className='text-center'>
                <h1 className='font-semibold text-2xl'>Edit Address</h1>
            </div>
            <div>
                <div className='text-nowrap text-gray-400'>
                    <Textfield
                        type="text"
                        className="h-10"
                        label="Save address as (ex : home address, office address)"
                        placeholder="Home"
                        name="save_address"
                        value={form.save_address}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-nowrap text-gray-400 py-2'>
                        <Textfield
                            type="text"
                            className="h-10 w-64"
                            label="Recipient’s name"
                            name="recipient_name"
                            value={form.recipient_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='text-nowrap text-gray-400 py-2'>
                        <Textfield
                            type="number"
                            className="h-10 w-72"
                            label="Recipient's telephone number"
                            name="recipient_phone"
                            value={form.recipient_phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-nowrap text-gray-400'>
                        <Textfield
                            type="text"
                            className="h-10 w-64"
                            label="Address"
                            name="recipient_address"
                            value={form.recipient_address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='text-nowrap text-gray-400'>
                        <Textfield
                            type="number"
                            className="h-10 w-72"
                            label="Postal code"
                            name="postal_code"
                            value={form.postal_code}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='text-nowrap text-gray-400'>
                    <Textfield
                        type="text"
                        className="h-10 w-64"
                        label="City or Subdistrict"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                    />
                </div>
                <div className='text-nowrap text-gray-400 py-2'>
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            name='primary'
                            checked={form.primary}
                            onChange={handleChange}
                        />
                        <span className="ml-2">Make it the primary address</span>
                    </label>
                </div>
                <div className='flex flex-row gap-10 text-center justify-end relative bottom-5'>
                    <ButtonWhite
                        className="w-28"
                        name="Cancel"
                    />
                    <ButtonWhite
                        className="bg-red-maroon w-28 text-white"
                        name="Save"
                        onClick={handleUpdate}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChangeAddress;
