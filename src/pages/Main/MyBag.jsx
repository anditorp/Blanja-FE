import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/base/Button'
import CartCard from '../../components/base/CartCard'
import api from '../../configs/api'


const MyBag = () => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGl0bzFAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzE2MDA2MzA1LCJleHAiOjE3MTYwMDk5MDUsImlzcyI6IkJsYW5qYSJ9.3cvCKRqk1rw5krUICN3KVk7XiQl8VJsiNBLFfH6HF1M"
        api.get(`/order/myorder`)
            .then((res) => {
                console.log(res);
                const result = res.data.data
                setOrder(result)

            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }, [])

    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/checkout')
    }


    return (
        <div className='p-20 px-36'>
            <nav></nav>

            <div className='container mx-auto flex flex-col gap-8'>
                <h1 className='font-bold text-4xl text-[#222222]'>My bag</h1>

                <div className='flex w-full gap-12'>

                    <div className='w-2/3 flex flex-col gap-5'>
                        {/* <div className='flex p-6 bg-white rounded-md justify-between gap-5 items-center drop-shadow-[0_0_8px_rgba(115,115,115,0.25)]'>
                            <input type="checkbox" name="" id="" />
                            <div className='flex gap-1 w-full'>
                                <p className='font-medium text-base text-[#222222]'>Select all items</p>
                                <p className='font-medium text-base text-[#9b9b9b]'>(2 items selected)</p>
                            </div>
                            <Link className='font-medium text-base text-[#DB3022]'>Delete</Link>
                        </div> */}

                        <div className='flex flex-col gap-3'>

                            {order && order.length > 0 ? (
                                <>
                                    {order.map((item) => (
                                        <CartCard
                                            // key={item.id} // uncomment if you have a unique id for each item
                                            // photo={item.photo}
                                            // name={item.name}
                                            // store={item.store}
                                            color={item.color}
                                            size={item.size}
                                            quantity={item.quantity}
                                        // price={item.price}
                                        />
                                    ))}
                                </>
                            ) : (
                                <p>Cart is Empty</p>
                            )}

                        </div>
                    </div>

                    <div className='w-1/3 h-fit p-6 bg-white flex flex-col gap-8 rounded-md drop-shadow-[0_0_8px_rgba(115,115,115,0.25)]'>
                        <p className='font-semibold text-base text-[#222222]'>Shopping summary</p>
                        <div className='flex justify-between items-center'>
                            <p className='font-medium text-base text-[#9b9b9b]'>Total Price</p>
                            <p className='font-semibold text-lg text-[#222222]'>$ 40.0</p>
                        </div>
                        <Button onClick={handleCheckout} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyBag