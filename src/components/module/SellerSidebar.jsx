import React from 'react'
import UserThumbnail from '../../assets/user-thumbnail.png'
import Edit from '../../assets/edit.svg'
import StoreIcon from '../../assets/store.svg'
import ChevronUp from '../../assets/chevron-up-active.svg'
import ChevronDown from '../../assets/chevron-down-inactive.svg'

const SellerSidebar = () => {
  return (
    <div className='container flex flex-col gap-20'>

      <div className='flex gap-4 items-center'>
        <img className='size-16 rounded-full object-cover' src={UserThumbnail} alt="" />
        <div className='flex flex-col gap-1'>
          <p className='font-semibold text-base text-[#222222]'>Johanes Mikael</p>
          <div className='flex gap-2'>
            <img src={Edit} alt="" />
            <p className='font-medium text-sm text-[#9b9b9b]'>Ubah profile</p>
          </div>
        </div>
      </div>

      <nav className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>

          <div className='flex gap-4 items-center'>
            <img className='size-8' src={StoreIcon} alt="" />
            <p className='font-medium text-sm text-[#222222] w-full'>Store</p>
            <img className='size-5' src={ChevronUp} alt="" />
          </div>

          <div className='flex flex-col gap-2'>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <div className='flex gap-4 items-center'>
            <img className='size-8' src={StoreIcon} alt="" />
            <p className='font-medium text-sm text-[#222222] w-full'>Store</p>
            <img className='size-5' src={ChevronUp} alt="" />
          </div>

          <div className='flex flex-col gap-2'>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <div className='flex gap-4 items-center'>
            <img className='size-8' src={StoreIcon} alt="" />
            <p className='font-medium text-sm text-[#222222] w-full'>Store</p>
            <img className='size-5' src={ChevronUp} alt="" />
          </div>

          <div className='flex flex-col gap-2'>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

            <div className='flex gap-4 items-center'>
              <img className='size-8 invisible' src={StoreIcon} alt="" />
              <p className='font-normal text-sm text-[#222222] w-full'>Store</p>
              <img className='size-5 invisible' src={ChevronUp} alt="" />
            </div>

          </div>

        </div>

      </nav>

    </div>
  )
}

export default SellerSidebar