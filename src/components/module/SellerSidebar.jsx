import React, { useState } from 'react'
import UserThumbnail from '../../assets/user-thumbnail.png'
import Edit from '../../assets/edit.svg'
import StoreIcon from '../../assets/store.svg'
import ChevronUp from '../../assets/chevron-up-active.svg'
import ChevronDown from '../../assets/chevron-down-inactive.svg'

const SellerSidebar = () => {
  const [submenus, setSubmenus] = useState({});
  const toggleSubmenu = (key) => {
    setSubmenus((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  
  // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  // const toggleSubmenu = () => {
  //   setIsSubmenuOpen(!isSubmenuOpen);
  // };
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

        {['Store1', 'Store2', 'Store3'].map((key, index) => (
          <div className='flex flex-col gap-2' key={index}>
            <div className='flex gap-4 items-center' onClick={() => toggleSubmenu(key)}>
              <img className='size-8' src={StoreIcon} alt="" />
              <p className='font-medium text-sm text-[#222222] w-full'>{key}</p>
              <img className='size-5' src={submenus[key] ? ChevronUp : ChevronDown} alt="" />
            </div>
            {submenus[key] && (
              <div className={'flex flex-col gap-2'}>
                <div className='flex gap-4 items-center'>
                  <img className='size-8 invisible' src={StoreIcon} alt="" />
                  <p className='font-normal text-sm text-[#222222] w-full'>My Profile</p>
                  <img className='size-5 invisible' src={ChevronUp} alt="" />
                </div>
                <div className='flex gap-4 items-center'>
                  <img className='size-8 invisible' src={StoreIcon} alt="" />
                  <p className='font-normal text-sm text-[#222222] w-full'>His Profile</p>
                  <img className='size-5 invisible' src={ChevronUp} alt="" />
                </div>
              </div>
            )}
          </div>
        ))}

      </nav>

    </div>
    // <div className='container flex flex-col gap-20'>

    //   <div className='flex gap-4 items-center'>
    //     <img className='size-16 rounded-full object-cover' src={UserThumbnail} alt="" />
    //     <div className='flex flex-col gap-1'>
    //       <p className='font-semibold text-base text-[#222222]'>Johanes Mikael</p>
    //       <div className='flex gap-2'>
    //         <img src={Edit} alt="" />
    //         <p className='font-medium text-sm text-[#9b9b9b]'>Ubah profile</p>
    //       </div>
    //     </div>
    //   </div>

    //   <nav className='flex flex-col gap-5'>
        
    //     <div className='flex flex-col gap-2'>

    //       <div className='flex gap-4 items-center' onClick={toggleSubmenu}>
    //         <img className='size-8' src={StoreIcon} alt="" />
    //         <p className='font-medium text-sm text-[#222222] w-full'>Store</p>
    //         <img className='size-5' src={isSubmenuOpen ? ChevronUp : ChevronDown} alt="" />
    //       </div>
    //       {isSubmenuOpen && (
    //         <div className={'flex flex-col gap-2'}>

    //           <div className='flex gap-4 items-center'>
    //             <img className='size-8 invisible' src={StoreIcon} alt="" />
    //             <p className='font-normal text-sm text-[#222222] w-full'>My Profile</p>
    //             <img className='size-5 invisible' src={ChevronUp} alt="" />
    //           </div>

    //           <div className='flex gap-4 items-center'>
    //             <img className='size-8 invisible' src={StoreIcon} alt="" />
    //             <p className='font-normal text-sm text-[#222222] w-full'>His Profile</p>
    //             <img className='size-5 invisible' src={ChevronUp} alt="" />
    //           </div>

    //         </div>
    //       )}


    //     </div>

    //     <div className='flex flex-col gap-2'>

    //       <div className='flex gap-4 items-center' onClick={toggleSubmenu}>
    //         <img className='size-8' src={StoreIcon} alt="" />
    //         <p className='font-medium text-sm text-[#222222] w-full'>Store</p>
    //         <img className='size-5' src={isSubmenuOpen ? ChevronUp : ChevronDown} alt="" />
    //       </div>
    //       {isSubmenuOpen && (
    //         <div className={'flex flex-col gap-2'}>

    //           <div className='flex gap-4 items-center'>
    //             <img className='size-8 invisible' src={StoreIcon} alt="" />
    //             <p className='font-normal text-sm text-[#222222] w-full'>My Profile</p>
    //             <img className='size-5 invisible' src={ChevronUp} alt="" />
    //           </div>

    //           <div className='flex gap-4 items-center'>
    //             <img className='size-8 invisible' src={StoreIcon} alt="" />
    //             <p className='font-normal text-sm text-[#222222] w-full'>His Profile</p>
    //             <img className='size-5 invisible' src={ChevronUp} alt="" />
    //           </div>

    //         </div>
    //       )}


    //     </div>

    //     <div className='flex flex-col gap-2'>

    //       <div className='flex gap-4 items-center' onClick={toggleSubmenu}>
    //         <img className='size-8' src={StoreIcon} alt="" />
    //         <p className='font-medium text-sm text-[#222222] w-full'>Store</p>
    //         <img className='size-5' src={isSubmenuOpen ? ChevronUp : ChevronDown} alt="" />
    //       </div>
    //       {isSubmenuOpen && (
    //         <div className={'flex flex-col gap-2'}>

    //           <div className='flex gap-4 items-center'>
    //             <img className='size-8 invisible' src={StoreIcon} alt="" />
    //             <p className='font-normal text-sm text-[#222222] w-full'>My Profile</p>
    //             <img className='size-5 invisible' src={ChevronUp} alt="" />
    //           </div>

    //           <div className='flex gap-4 items-center'>
    //             <img className='size-8 invisible' src={StoreIcon} alt="" />
    //             <p className='font-normal text-sm text-[#222222] w-full'>His Profile</p>
    //             <img className='size-5 invisible' src={ChevronUp} alt="" />
    //           </div>

    //         </div>
    //       )}


    //     </div>

    //   </nav>

    // </div>
  )
}

export default SellerSidebar