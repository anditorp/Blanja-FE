import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartCard from '../../components/base/CartCard'
import Button from '../../components/base/Button'
import Modal from '../../components/base/Modal'
import AddAddress from '../../components/module/AddAddress'
import Payment from '../../components/module/Payment'


const Checkout = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType) => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
    handleCloseModal();
  };

  return (
    <div className='p-20 px-36'>
      <nav></nav>

      <div className='container mx-auto flex flex-col gap-8'>
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

<<<<<<< HEAD
              <CartCard />
              <CartCard />
=======
            {order ? (
              <div className='flex flex-col gap-3'>
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
              </div>
            ) : (
              <p>Cart is Empty</p>
            )}
>>>>>>> adaaae17b7b5331a06f421dd1669cd9da57f20f6

            </div>
          </div>

          <div className='w-1/3 h-fit p-6 bg-white flex flex-col gap-8 rounded-md drop-shadow-[0_0_8px_rgba(115,115,115,0.25)]'>
            <p className='font-semibold text-base text-[#222222]'>Shopping summary</p>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-base text-[#9b9b9b]'>Order</p>
                <p className='font-semibold text-lg text-[#222222]'>$ 40.0</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-base text-[#9b9b9b]'>Delivery</p>
                <p className='font-semibold text-lg text-[#222222]'>$ 5.0</p>
              </div>
              <div className='bg-[#9b9b9b] h-[1px]'></div>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-base text-[#9b9b9b]'>Shopping summary</p>
                <p className='font-semibold text-lg text-[#DB3022]'>$ 45.0</p>
              </div>
            </div>
            <Button onClick={() => handleOpenModal('Payment')} />
          </div>

        </div>

      </div>

      <Modal open={openModal === 'ChooseAddress'} onClose={handleCloseModal}>
<<<<<<< HEAD
        <div className='flex flex-col gap-8 items-center'>
=======
        <ChooseAddress onSelectAddress={handleSelectAddress} onClick={() => handleOpenModal('AddAddress')} />
        {/* <div className='flex flex-col gap-8 items-center'>
>>>>>>> adaaae17b7b5331a06f421dd1669cd9da57f20f6

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