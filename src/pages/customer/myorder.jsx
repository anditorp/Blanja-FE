import React from 'react';
import Profilebar from '../../components/module/profile/profilebar';
import profileimg from '../../../src/assets/profile/image profile.svg';
import FormMyOrder from '@/components/module/profile/formmyorder';

const MyOrder = () => {

  return (
    <div className='flex flex-row bg-gray-200 h-208'>
      <Profilebar
      name="Johanes Mikael"
      image={profileimg}
      />
      <FormMyOrder/>
    </div>
  )
}

export default MyOrder