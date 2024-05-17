import React from 'react'
import SellerSidebar from '../../components/module/SellerSidebar'
import FormContainer from '../../components/base/FormContainer'
import StoreProfile from '../../components/module/StoreProfile'
import MyProduct from '../../components/module/MyProduct'
import SellingProduct from '../../components/module/SellingProduct'


const SellerProfile = () => {

    return (
        <div className='bg-[#f5f5f5] mx-auto'>

            <div className='flex '>

                <div className='bg-white p-12 pl-40 w-1/4'>

                    <SellerSidebar />

                </div>

                <div className='p-12 pr-40 w-3/4 flex flex-col gap-8'>

                    <FormContainer>
                        <StoreProfile />
                    </FormContainer>

                    <FormContainer>
                        <MyProduct />
                    </FormContainer>

                    <SellingProduct />

                </div>

            </div>

        </div>
    )
}

export default SellerProfile