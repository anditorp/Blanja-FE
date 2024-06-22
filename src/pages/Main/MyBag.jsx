import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/base/Button'
import CartCard from '../../components/base/CartCard'
import api from '../../configs/api'


const MyBag = () => {
    const [order, setOrder] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    const getOrder = () => {
        api.get(`/order/my-order`)
            .then((res) => {
                console.log(res);
                alert("Get Order Successful")
                const result = res.data.data
                setOrder(result)

            })
            .catch((err) => {
                console.log(err.response);
                alert(err.response.data.message);
            })
    }

    const navigate = useNavigate()

    const handleCheckout = () => {
        const updatePromises = order.map((item) => {
            const { order_id, color, quantity, size } = item;
            return api.put(`/order/${order_id}`, { color, quantity, size });
        });

        Promise.all(updatePromises)
            .then((results) => {
                console.log(results);
                alert("Update Orders Successful");
                navigate('/checkout');
            })
            .catch((err) => {
                console.log(err.response);
                alert("Update Orders Failed");
            });
    };

    const handleDelete = (id) => {
        api.delete(`/order/${id}`)
            .then((res) => {
                console.log(res);
                alert("Delete Order Successful")
                getOrder()
            })
            .catch((err) => {
                console.log(err.response);
                alert("Delete Order Failed")
            })
    }

    const handleIncrement = (id) => {
        setOrder((prevOrder) =>
            prevOrder.map((item) =>
                item.order_id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id) => {
        setOrder((prevOrder) =>
            prevOrder.map((item) =>
                item.order_id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    useEffect(() => {
        getOrder()
    }, [])

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = order.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [order]);

    return (
        <div className='p-36 px-36'>
            <div className=' mx-auto flex flex-col gap-8'>
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
                                            key={item.order_id}
                                            photo={item.product_image}
                                            name={item.product_name}
                                            store="Zalora Cloth"
                                            color={item.color}
                                            size={item.size}
                                            quantity={item.quantity}
                                            price={item.product_price}
                                            onDelete={() => handleDelete(item.order_id)}
                                            onIncrement={() => handleIncrement(item.order_id)}
                                            onDecrement={() => handleDecrement(item.order_id)}
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
                            <p className='font-semibold text-lg text-[#222222]'>$ {totalPrice.toFixed(2)}</p>
                        </div>
                        <Button text="Buy" onClick={handleCheckout} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyBag