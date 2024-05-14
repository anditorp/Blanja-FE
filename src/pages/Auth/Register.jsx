import React, { useState } from 'react'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../configs/api'
import Logo from '../../assets/logo.svg'
import RegisterCustomer from '../../components/module/RegisterCustomer'
import RegisterSeller from '../../components/module/RegisterSeller'



const Register = () => {
    const [toggle, setToggle] = useState(1)
    const handleToggle = (id) => {
        setToggle(id)
    }

    return (
        <div>
            <div className='container mx-auto my-20 flex items-center justify-center'>
                <div className='container w-1/3 flex flex-col gap-10 items-center'>

                    <Link to='/'><img className="h-[50px] w-fit" src={Logo} alt="" /></Link>

                    <h1 className='text-center font-bold text-lg'>Please sign up with your account</h1>

                    <div className='flex flex-col gap-10 w-full items-center'>
                        <ul className='flex rounded-md border border-[#9b9b9b] overflow-hidden w-fit items-center'>
                            <li className='flex flex-col gap-[11px] cursor-pointer' onClick={() => handleToggle(1)}>
                                <div className={toggle === 1 ? 'p-[15px] bg-[#DB3022] font-bold text-base text-center leading-5 text-[#FFFFFF] w-32' : 'p-[15px] bg-white font-bold text-base text-center leading-5 text-[#9b9b9b] w-32'}>Customer</div>
                            </li>
                            <li className='flex flex-col gap-[11px] cursor-pointer' onClick={() => handleToggle(2)}>
                                <div className={toggle === 2 ? 'p-[15px] bg-[#DB3022] font-bold text-base text-center leading-5 text-[#FFFFFF] w-32' : 'p-[15px] bg-white font-bold text-base text-center leading-5 text-[#9b9b9b] w-32'}>Seller</div>
                            </li>
                        </ul>

                        <div className={toggle === 1 ? 'block w-full' : 'hidden'}>
                            <RegisterCustomer />
                        </div>

                        <div className={toggle === 2 ? 'block w-full' : 'hidden'}>
                            <RegisterSeller />
                        </div>
                    </div>
                    <p className="w-full text-center font-normal text-base text-[#1F2A36]">Already have a Tokopedia account? <Link className="text-[#DB3022]" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
        // <div className="bg-[#F6F7F8]">

        //     <div className="px-[75px] py-[39px] max-lg:px-[30px]">
        //         <div className='container mx-auto flex gap-[70px] max-lg:flex-col'>

        //             <div className='flex flex-col basis-1/2'>
        //                 <HeroAuth>Temukan developer berbakat & terbaik di berbagai bidang keahlian</HeroAuth>
        //             </div>

        //             <div className='flex flex-col basis-1/2'>
        //                 <FormContainer formTitle='Halo, Pewpeople' formDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'>
        //                     <div className="flex flex-col gap-4">
        //                         <Input
        //                             type='text'
        //                             value={form.name}
        //                             onChange={handleChange}
        //                             name="name"
        //                             label="Name"
        //                             placeholder="Masukkan nama"
        //                         />
        //                         <Input
        //                             type='email'
        //                             value={form.email}
        //                             onChange={handleChange}
        //                             name="email"
        //                             label="Email"
        //                             placeholder="Masukkan email"
        //                         />
        //                         <Input
        //                             type='text'
        //                             value={form.company}
        //                             onChange={handleChange}
        //                             name="company"
        //                             label="Perusahaan"
        //                             placeholder="Masukan nama perusahaan"
        //                         />
        //                         <Input
        //                             type='text'
        //                             value={form.position}
        //                             onChange={handleChange}
        //                             name="position"
        //                             label="Jabatan"
        //                             placeholder="Posisi di perusahaan Anda"
        //                         />
        //                         <Input
        //                             type='tel'
        //                             value={form.phone}
        //                             onChange={handleChange}
        //                             name="phone"
        //                             label="Phone"
        //                             placeholder="Masukkan phone"
        //                         />
        //                         <Input
        //                             type='password'
        //                             value={form.password}
        //                             onChange={handleChange}
        //                             name="password"
        //                             label="Password"
        //                             placeholder="Masukkan password"
        //                         />
        //                     </div>
        //                     <div className="flex flex-col gap-4">
        //                         <Button variant='primary-yellow' onClick={handleRegister} text='Daftar' />
        //                         <p className="text-center font-normal text-base text-[#1F2A36]">Anda sudah punya akun? <Link className="text-[#FBB017]" to="/login">Masuk disini</Link></p>
        //                     </div>
        //                 </FormContainer>
        //             </div>

        //         </div>
        //     </div >

        // </div >
    )
}

export default Register