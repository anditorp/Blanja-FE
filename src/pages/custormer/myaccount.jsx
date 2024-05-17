import React from 'react';
import Profilebar from '../../component/module/profile/profilebar';
import profileimg from '../../../src/assets/profile/image profile.svg';
import FormProfile from '../../component/module/profile/formprofile';

const MyAccount = () => {
  return (
    <div className='flex flex-row bg-gray-200'>
      <Profilebar
      name="Johanes Mikael"
      image={profileimg}
      />
      <FormProfile/>
    </div>
  )
}

export default MyAccount