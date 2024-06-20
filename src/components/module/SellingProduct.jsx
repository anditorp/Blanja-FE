import React, { useState } from 'react'
import FormContainer from '../../components/base/FormContainer'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import BigProductThumbnail from '../../assets/Group 1314.svg'
import SmallProductThumbnail from '../../assets/Group 1315.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import api from '../../configs/api'



const SellingProduct = () => {
    const [form, setForm] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        condition: "",
        description: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setForm({
            name: "",
            category: "",
            price: "",
            stock: "",
            condition: "",
            description: "",
        });
    };

    const handleSell = (e) => {
        e.preventDefault()
        // console.log(form);
        api.post('/products', {
            name: form.name,
            category: form.category,
            price: form.price,
            stock: form.stock,
            condition: form.condition,
            description: form.description,
        })
            .then((res) => {
                console.log(res);
                alert(`Create Product Success`)
                resetForm()

            })
            .catch((err) => {
                console.log(err.response);
                alert(err.response.data.message)
            })
    }



    return (
        <div className='flex flex-col gap-8'>
            <FormContainer title='Inventory' subtitle=''>
                <div className='bg-[#d4d4d4] h-[1px] w-full'></div>
                <div className='flex flex-col gap-4 w-full'>
                    <Input
                        type='text'
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                        label="Name of goods"
                        placeholder=""
                    />
                    <Input
                        type='text'
                        value={form.category}
                        onChange={handleChange}
                        name="category"
                        label="Category"
                        placeholder=""
                    />
                </div>
            </FormContainer>

            <FormContainer title='Item details' subtitle=''>
                <div className='bg-[#d4d4d4] h-[1px] w-full'></div>
                <div className='flex flex-col gap-4 w-full'>
                    <Input
                        type='text'
                        value={form.price}
                        onChange={handleChange}
                        name="price"
                        label="Unit price"
                        placeholder=""
                    />
                    <Input
                        type='text'
                        value={form.stock}
                        onChange={handleChange}
                        name="stock"
                        label="Stock"
                        placeholder=""
                    />

                    <div>
                        {/* <Input /> */}
                        <Input
                            type='text'
                            value={form.condition}
                            onChange={handleChange}
                            name="condition"
                            label="Condition"
                            placeholder=""
                        />

                        {/* <div className='flex'>
                            <input type="radio" name="" id="" /> <label>Baru</label>
                            <input type="radio" name="" id="" /> <label>Bekas</label>
                        </div> */}
                    </div>
                </div>
            </FormContainer>

            <FormContainer title='Photo of goods' subtitle=''>
                <div className='bg-[#d4d4d4] h-[1px] w-full'></div>
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

            <FormContainer title='Description' subtitle=''>
                <div className='bg-[#d4d4d4] h-[1px] w-full'></div>
                <div className='w-full'>
                    <Input
                        type='text'
                        value={form.description}
                        onChange={handleChange}
                        name="description"
                        label=""
                        placeholder=""
                    />
                    {/* <ReactQuill /> */}
                    {/* <ReactQuill style={{ height: "316px" }} /> */}
                </div>
            </FormContainer>

            <div className='flex justify-end'>
                <Button className={'w-48'} text="Jual" onClick={handleSell} />
            </div>
        </div>


    )
}

export default SellingProduct