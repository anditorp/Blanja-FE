import React from 'react'
import { MyOrderTable } from '@/components/module/TableOrder'
import FormContainer from '../base/FormContainer'

const MyOrder = () => {
  return (
    <FormContainer title='My order' subtitle=''>
      <div className='flex flex-col w-full'>
        {/* <div>
                <img src="" alt="" />
                <p>Search</p>
            </div> */}

        <div>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-2'>
              <p className='font-medium text-base text-[#DB3022]'>All items</p>
              <div className='h-[4px] w-full bg-[#DB3022]'></div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-medium text-base text-[#9b9b9b]'>Paid</p>
              <div className='h-[4px] w-full bg-[#9b9b9b] invisible'></div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-medium text-base text-[#9b9b9b]'>Processed</p>
              <div className='h-[4px] w-full bg-[#9b9b9b] invisible'></div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-medium text-base text-[#9b9b9b]'>Sent</p>
              <div className='h-[4px] w-full bg-[#9b9b9b] invisible'></div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-medium text-base text-[#9b9b9b]'>Completed</p>
              <div className='h-[4px] w-full bg-[#9b9b9b] invisible'></div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-medium text-base text-[#9b9b9b]'>Cancelled</p>
              <div className='h-[4px] w-full bg-[#9b9b9b] invisible'></div>
            </div>
          </div>

          <div className='bg-[#d4d4d4] h-[1px] w-full'></div>
        </div>

        <MyOrderTable />

        {/* <table class="table-auto border border-black">
                <thead className='bg-[#f6f6f6] p-4 px-8'>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table> */}
      </div>
    </FormContainer>
  )
}

export default MyOrder