import React from 'react';

import pencil from '../../../assets/profile/img edit.svg';
import myaccount from '../../../assets/profile/My Account.svg';
import shipping from '../../../assets/profile/shipping.svg';
import myorder from '../../../assets/profile/My order.svg';

const Profilebar = ({ name, image }) => {
    return (
        <div className='flex flex-row bg-white shadow-md w-96 h-screen py-36 px-28 gap-5'>
            <img src={image} alt={`${name}'s profile`} className='w-14 h-14 rounded-full' /> 
            <div className='flex flex-col'>
            <h1 className='text-lg font-semibold text-nowrap'>{name}</h1>
            <img className='cursor-pointer' src={pencil} alt="pencil" />
            <div className='flex flex-col absolute py-20 px-3'>
                <div className='flex flex-row py-5 relative right-20 top-5'>
                    <img className='w-10 h-10 relative top-2' src={myaccount} alt="myaccount" />
                    <label className='text-nowrap'>My account</label>
                </div>
                <div className='flex flex-row relative right-20'>
                    <img className='w-9 h-9 relative top-2' src={shipping} alt="myaccount" />
                    <label className='text-nowrap relative left-3'>Shipping Address</label>
                </div>
                <div className='flex flex-row relative right-32 px-2 bottom-5'>
                    <img className='relative bottom-8 right-5 w-40 h-40' src={myorder} alt="myaccount" />
                    <label className='text-nowrap relative right-20 top-5'>My Order</label>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Profilebar