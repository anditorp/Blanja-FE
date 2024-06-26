import React from 'react'
import SellerSidebar from '../../components/module/SellerSidebar'
import FormContainer from '../../components/base/FormContainer'
import StoreProfile from '../../components/module/StoreProfile'
import MyProduct from '../../components/module/MyProduct'
import MyOrder from '@/components/module/MyOrder'
import SellingProduct from '../../components/module/SellingProduct'
import { Outlet } from 'react-router-dom'


const SellerProfile = () => {

    return (
        <div className='bg-[#f5f5f5] mx-auto'>

            <div className='flex max-lg:flex-col'>

                <div className='py-36 pl-24 pr-8 bg-white max-lg:pl-4 max-lg:pr-4'>

                    <SellerSidebar />

                </div>

                <div className='p-36 w-3/4 flex flex-col gap-8 max-lg:p-4 max-lg:w-full'>

                    <Outlet />

                    {/* <FormContainer title='My profile store' subtitle='Manage your profile information'>
                        <StoreProfile />
                    </FormContainer> */}

                    {/* <FormContainer title='My product' subtitle=''>
                        <MyProduct />
                    </FormContainer> */}

                    {/* <SellingProduct /> */}

                    {/* <FormContainer title='My order' subtitle=''>
                        <MyOrder />
                    </FormContainer> */}

                </div>

            </div>

        </div>
    )
}

export default SellerProfile