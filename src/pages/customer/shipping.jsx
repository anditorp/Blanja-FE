import React from 'react';
import Profilebar from '../../components/module/profile/profilebar';
import profileimg from '../../../src/assets/profile/image profile.svg';
import FormProfile from '../../components/module/profile/formprofile';
import ProfilePic from '../../assets/profile/profilepic.svg';

const ShippingPage = () => {
  return (
    <div className='flex flex-row bg-gray-200 h-208'>
      <Profilebar
      name="Johanes Mikael"
      image={profileimg}
      />
      <FormProfile
      img={ProfilePic}
      />
    </div>
  )
}

export default ShippingPage