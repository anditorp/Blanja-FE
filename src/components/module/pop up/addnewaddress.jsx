/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Textfield from '@/components/base/textfield/textfield';
import ButtonWhite from '@/components/base/button/buttonwhite';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddNewAddress = () => {
    const [add, setAdd] = useState({
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
        setAdd(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios({
            method: "POST",
            url: `${import.meta.env.VITE_URL_BLANJA}/address`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: add
        })
        .then((res) => {
            // console.log(res.data, 'Add Address Successfully!!');
            toast.success('Add Address Successfully!!')
            // alert('Add Address Successfully!!');
        })
        .catch((err) => {
            // console.log(err);
            toast.error('Add Address Failed!!')
            // alert('Add Address Failed!!');
        });
    };

    return (
        <div className='h-128'>
            <div className='text-center'>
                <h1 className='font-semibold text-2xl'>Add New Address</h1>
            </div>
            <div>
                <div className='text-nowrap text-gray-400'>
                    <Textfield
                        type="text"
                        className="h-10"
                        label="Save address as (ex : home address, office address)"
                        placeholder="Home"
                        value={add.save_address}
                        name="save_address"
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
                            value={add.recipient_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='text-nowrap text-gray-400 py-2'>
                        <Textfield
                            type="number"
                            className="h-10 w-72"
                            label="Recipient's telephone number"
                            name="recipient_phone"
                            value={add.recipient_phone}
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
                            value={add.recipient_address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='text-nowrap text-gray-400'>
                        <Textfield
                            type="number"
                            className="h-10 w-72"
                            label="Postal code"
                            name="postal_code"
                            value={add.postal_code}
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
                        value={add.city}
                        onChange={handleChange}
                    />
                </div>
                <div className='text-nowrap text-gray-400 py-2'>
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            name='primary'
                            checked={add.primary}
                            onChange={handleChange} />
                        <span className="ml-2">Make it the primary address</span>
                    </label>
                </div>
                <div className='flex flex-row gap-10 text-center justify-end relative bottom-14'>
                    <ButtonWhite
                        className="w-28"
                        name="Cancel"
                        onClick={() => setAdd({
                            save_address: '',
                            recipient_name: '',
                            recipient_phone: '',
                            recipient_address: '',
                            postal_code: '',
                            city: '',
                            primary: false,
                        })}
                    />
                    <ButtonWhite
                        className="bg-red-maroon w-28 text-white"
                        name="Save"
                        type="submit"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddNewAddress;
