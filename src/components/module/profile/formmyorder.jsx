import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import defaultimage from '../../../../public/No-image-available.png';

const FormMyOrder = () => {
  const [active, setActive] = useState('All items');
  const [items, setItems] = useState([]);

  const handleGetAllItem = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_URL_BLANJA}/order/my-order`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setItems(response.data.data);
      alert('Get All Item Success!!');
      console.log(response.data);
    } catch (error) {
      console.log(error, "<<<<<<<<Fetch Item Failed!!");
    }
  };

  const tabs = [
    'All items',
    'Not yet paid',
    'Packed',
    'Sent',
    'Completed',
    'Order cancel'
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const imageDefault = '/notfound.png';

  const contentItem = {
    'All items': (
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className='flex justify-between border p-2 mb-2'>
              <div>
                <p><strong>{item.product_name}</strong></p>
                <p>Description: {truncateText(item.product_description || item.product_name, 100)}</p>
                <p>Quantity: {item.quantity || 1}</p>
                <p>Price: {item.product_price}</p>
                <p>Size: {item.size || 1}</p>
                <p>Color: {item.color}</p>
                <p>Condition: {item.product_condition || 'new'}</p>
              </div>
              <div>
                <img src={item.product_image || imageDefault} alt={item.product_name} className="w-28 h-28 object-cover" />
              </div>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    ),
    'Not yet paid': <div>Not yet paid items are here.....</div>,
    'Packed': <div>Packed items are here.....</div>,
    'Sent': <div>Sent items are here.....</div>,
    'Completed': <div>Completed items are here.....</div>,
    'Order cancel': <div>Cancelled orders are here.....</div>
  };

  useEffect(() => {
    handleGetAllItem();
  }, []);

  return (
    <div className='flex flex-col bg-white w-208 h-full relative left-20 top-32 py-5 rounded-md'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl py-5'>My Order</h1>
        <div className='flex space-x-16 border-b-2 border-gray-200 font-semibold'>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`pb-2 cursor-pointer ${active === tab
                  ? 'border-b-4 border-red-maroon text-red-maroon'
                  : 'text-gray-500'
                }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className='px-5 py-5'>
        {contentItem[active]}
      </div>
    </div>
  );
};

export default FormMyOrder;
