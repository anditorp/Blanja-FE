import React, { useEffect, useState } from 'react'
import api from '../../configs/api'

const ChooseAddress = ({ onClick, onSelectAddress }) => {
    const [address, setAddress] = useState([])

    const getAddress = () => {
        api.get(`/address`)
            .then((res) => {
                console.log(res);
                alert("Get Address Successful")
                const result = res.data.data
                setAddress(result)

            })
            .catch((err) => {
                console.log(err.response);
                alert(err.response.data.message);
            })
    }

    useEffect(() => {
        getAddress()
    }, [])

    const handleSelectAddress = (selectedAddress) => {
        onSelectAddress(selectedAddress);
    };


    return (
        <div className='flex flex-col gap-8 items-center'>

            <h2 className='font-semibold text-3xl text-[#222222]'>Choose another address</h2>

            <div className='w-full flex flex-col p-8 bg-white rounded-md justify-between gap-5 border border-dashed border-[#9b9b9b]' onClick={onClick}>
                <p className='font-semibold text-center text-lg text-[#9b9b9b]'>Add new address</p>
            </div>

            {address ? (
                <div className='flex flex-col gap-3 w-full'>
                    {address.map((item) => (
                        <div key={item.address_id} className='flex flex-col p-6 bg-white rounded-md justify-between gap-3 border border-[#DB3022]'>
                            <p className='font-semibold text-base text-[#222222]'>{item.recipient_name}</p>
                            <p className=' font-normal text-sm text-[#222222]'>{item.recipient_address}</p>
                            <p className='font-semibold text-base text-[#DB3022] cursor-pointer' onClick={() => handleSelectAddress(item)}>Change address</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Address is Empty</p>
            )}
        </div>
    )
}

export default ChooseAddress