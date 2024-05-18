import React from 'react';
import Profilebar from '../../components/module/profile/profilebar';
import profileimg from '../../../src/assets/profile/image profile.svg';
import FormShipping from '@/components/module/profile/formshipping';

const ShippingPage = () => {
  const handleAddress = () => {
    alert('Change Address Success!!!')
  };

  return (
    <div className='flex flex-row bg-gray-200 h-208'>
      <Profilebar
      name="Johanes Mikael"
      image={profileimg}
      />
      <FormShipping
      name="Andreas Jane"
      address="Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181"
      onChange={handleAddress}
      />
    </div>
  )
}

export default ShippingPage