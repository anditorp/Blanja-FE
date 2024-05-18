import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartCard from '../../components/base/CartCard'
import Button from '../../components/base/Button'
import Modal from '../../components/base/Modal'
import AddAddress from '../../components/module/AddAddress'
import Payment from '../../components/module/Payment'
import api from '../../configs/api'


const Checkout = () => {
  const [openModal, setOpenModal] = useState(null);
  const [order, setOrder] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 5.00;

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

  const handleOpenModal = (modalType) => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className='p-36 px-36'>
      <div className=' mx-auto flex flex-col gap-8'>
        <h1 className='font-bold text-4xl text-[#222222]'>My bag</h1>

        <div className='flex w-full gap-12'>

          <div className='w-2/3 flex flex-col gap-5'>

            <div className='flex flex-col gap-4'>
              <p className='font-semibold'>Shipping address</p>
              <div className='flex flex-col p-6 bg-white rounded-md justify-between gap-5 drop-shadow-[0_0_8px_rgba(115,115,115,0.25)]'>
                <p className='font-semibold text-base text-[#222222]'>Andreas Jane</p>
                <p className=' font-normal text-sm text-[#222222]'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                <Button variant='secondary-gray' text='Choose another address' className='w-fit' onClick={() => handleOpenModal('ChooseAddress')} />
              </div>
            </div>

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
                      editor={false}
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
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-base text-[#9b9b9b]'>Order</p>
                <p className='font-semibold text-lg text-[#222222]'>$ {totalPrice.toFixed(2)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-base text-[#9b9b9b]'>Delivery</p>
                <p className='font-semibold text-lg text-[#222222]'>$ {deliveryFee.toFixed(2)}</p>
              </div>
              <div className='bg-[#9b9b9b] h-[1px]'></div>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-base text-[#9b9b9b]'>Shopping summary</p>
                <p className='font-semibold text-lg text-[#DB3022]'>$ {(totalPrice + deliveryFee).toFixed(2)}</p>
              </div>
            </div>
            <Button onClick={() => handleOpenModal('Payment')} text='Select Payment' />
          </div>

        </div>

      </div>

      <Modal open={openModal === 'ChooseAddress'} onClose={handleCloseModal}>
        <div className='flex flex-col gap-8 items-center'>

          <h2 className='font-semibold text-3xl text-[#222222]'>Choose another address</h2>

          <div className='w-full flex flex-col p-8 bg-white rounded-md justify-between gap-5 border border-dashed border-[#9b9b9b]' onClick={() => handleOpenModal('AddAddress')}>
            <p className='font-semibold text-center text-lg text-[#9b9b9b]'>Add new address</p>
          </div>

          <div className='flex flex-col p-6 bg-white rounded-md justify-between gap-3 border border-[#DB3022]'>
            <p className='font-semibold text-base text-[#222222]'>Andreas Jane</p>
            <p className=' font-normal text-sm text-[#222222]'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <Link className='font-semibold text-base text-[#DB3022]'>Change address</Link>
          </div>
        </div>
      </Modal>

      <Modal open={openModal === 'AddAddress'} onClose={handleCloseModal}>
        <AddAddress />
      </Modal>

      <Modal open={openModal === 'Payment'} onClose={handleCloseModal}>
        <Payment />
      </Modal>

    </div>
  )
}

export default Checkout