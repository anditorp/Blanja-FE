import React from 'react'
import { DataTableDemo } from '@/components/module/Table'


const MyProduct = () => {
    return (
        <div className='flex flex-col w-full'>
            <div>
                <img src="" alt="" />
                <p>Search</p>
            </div>

            <DataTableDemo />

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
    )
}

export default MyProduct