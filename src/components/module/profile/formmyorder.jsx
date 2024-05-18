import React, { useState } from 'react';

const FormMyOrder = () => {
  const [active, setActive] = useState('All items');

  const tabs = [
    'All items',
    'Not yet paid',
    'Packed',
    'Sent',
    'Completed',
    'Order cancel'
  ]

  const contentItem = {
    'All items': <div>All item is here.....</div>,
    'Not yet paid': <div>Not yet paid All item is here.....</div>,
    'Packed': <div>Packed All item is here.....</div>,
    'Sent': <div>Sent All item is here.....</div>,
    'Completed': <div>Completed All item is here.....</div>,
    'Order cancel': <div>Order cancel All item is here.....</div>
  }

  return (
    <div className='flex flex-col bg-white w-208 h-144 relative left-20 top-32 py-5 rounded-md'>
      <div className='px-5'>
        <h1 className='font-semibold text-2xl py-5'>My Order</h1>
        <div className='flex space-x-16 border-b-2 border-gray-200 font-semibold'>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`pb-2 cursor-pointer ${
                active === tab
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
  )
}

export default FormMyOrder