import React from 'react'
import FormContainer from '../../components/base/FormContainer'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import BigProductThumbnail from '../../assets/Group 1314.svg'
import SmallProductThumbnail from '../../assets/Group 1315.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const SellingProduct = () => {
    return (
        <div className='flex flex-col gap-8'>
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

                    <Button variant='secondary-gray' className={"w-56"} text="Upload photo" />

                </div>
            </FormContainer>

            <FormContainer>
                <div className='w-full h-fit'>
                    <ReactQuill
                        style={{ height: "316px" }} />
                </div>
            </FormContainer>
            
            <div className='flex justify-end'>
            <Button className={'w-48'} />
            </div>
        </div>

        
    )
}

export default SellingProduct