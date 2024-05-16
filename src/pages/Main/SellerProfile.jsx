import React from 'react'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import UserThumbnail from '../../assets/user-thumbnail.png'
import SellerSidebar from '../../components/module/SellerSidebar'
import FormContainer from '../../components/base/FormContainer'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import BigProductThumbnail from '../../assets/Group 1314.svg'
import SmallProductThumbnail from '../../assets/Group 1315.svg'
import { DataTableDemo } from '@/components/module/Table'




const SellerProfile = () => {

    return (
        <div className='bg-[#f5f5f5] mx-auto'>

            <div className='flex '>

                <div className='bg-white p-12 pl-40 w-1/4'>

                    <SellerSidebar />

                </div>

                <div className='p-12 pr-40 w-3/4 flex flex-col gap-8'>



                    <FormContainer>
                        <div className='w-full flex flex-col gap-6'>
                            <div className='flex gap-10 items-center'>
                                <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                                <Input label='' placeholder='' />
                            </div>

                            <div className='flex gap-10 items-center'>
                                <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                                <Input label='' placeholder='' />
                            </div>

                            <div className='flex gap-10 items-center'>
                                <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                                <Input label='' placeholder='' />
                            </div>

                            <div className='flex gap-10 items-center'>
                                <p className='font-medium text-sm text-[#9b9b9b]'>Store name</p>
                                <Input label='' placeholder='' />
                            </div>

                            <Button className={""} text='Save' />
                        </div>

                        <div className='bg-[#d4d4d4] h-[200px] w-[1px]'></div>

                        <div className='flex flex-col items-center gap-5'>
                            <img className='size-28 rounded-full object-cover' src={UserThumbnail} alt="" />
                            <Button variant='secondary-gray' text='Select Image' />
                        </div>
                    </FormContainer>

                    <FormContainer>
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
                    </FormContainer>

                    <FormContainer>
                        <div className='flex flex-col gap-4 w-full'>
                            <Input />
                        </div>
                    </FormContainer>

                    <FormContainer>
                        <div className='flex flex-col gap-4 w-full'>
                            <Input />
                            <Input />

                            <div>
                                <Input />
                                <div className='flex'>
                                    <input type="radio" name="" id="" /> <label>Baru</label>
                                    <input type="radio" name="" id="" /> <label>Bekas</label>
                                </div>
                            </div>
                        </div>
                    </FormContainer>

                    <FormContainer>
                        <div className='p-10 border border-dashed border-[#d4d4d4] flex flex-col gap-5 w-full'>

                            <div className='flex gap-4 items-center w-full'>
                                <div className='flex flex-col gap-2 items-center'>
                                    <img className=' size-48 object-cover ' src={BigProductThumbnail} alt="" />
                                    <p className='font-medium text-sm text-[#9b9b9b]'>Foto utama</p>
                                </div>
                                <img className=' size-32 object-cover ' src={SmallProductThumbnail} alt="" />
                                <img className=' size-32 object-cover ' src={SmallProductThumbnail} alt="" />
                                <img className=' size-32 object-cover ' src={SmallProductThumbnail} alt="" />
                                <img className=' size-32 object-cover ' src={SmallProductThumbnail} alt="" />
                            </div>

                            <div className='bg-[#d4d4d4] h-[1px] w-full'></div>

                            <Button variant='secondary-gray' className={"w-56"} text="Upload photo"/>

                        </div>
                    </FormContainer>

                    <FormContainer>
                        <div className='w-full'>
                            <ReactQuill
                                style={{ height: "316px" }} />
                        </div>
                    </FormContainer>

                </div>

            </div>

        </div>
    )
}

export default SellerProfile