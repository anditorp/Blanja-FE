import React, { useRef, useState } from 'react';
import axios from 'axios';
import DefaultImage from "../../../assets/profile/default.jpg";
import LoadingAnimation from '../../../assets/profile/loading.gif';
import ButtonWhite from '@/components/base/button/buttonwhite';

const UploadImage = ({onImageChange}) => {
  const [avatarUrl, setAvatarUrl] = useState(DefaultImage);
  const fileUploadRef = useRef(null);

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  }

  const uploadImageDisplay = async () => {
    try {
      setAvatarUrl(LoadingAnimation);
      const uploadedFile = fileUploadRef.current.files[0];
      // const cachedURL = URL.createObjectURL(uploadedFile);
      // setAvatarUrl(cachedURL);
      if (uploadedFile) {
        alert("uploaded Success!!!")
      } else (
        alert("uploaded Failed!!!")
      )

      const formData = new FormData();
      formData.append("file", uploadedFile);
      console.log(formData, "<<<<<<<formdata");

      const token = localStorage.getItem('token');
      // console.log(token,"<<<<<<<token");

      const response = await axios.put(`${import.meta.env.VITE_URL_BLANJA}/customer/profile`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      // console.log(response.data, "<<<<<<<<<<<<<response");
      
      if (response.status === 200) {
        const data = response.data;
        setAvatarUrl(data?.location);
        onImageChange(data?.location);
      }
    } catch (error) {
      console.error(error);
      setAvatarUrl(DefaultImage);
    }
  }


  return (
    <div className='flex flex-col gap-5'>
      <img
        src={avatarUrl}
        alt="User Avatar"
        className='w-28 h-28 rounded-full relative left-2'
      />
      <form id='form' encType='multipart/form-data'>
        <ButtonWhite
          type="submit"
          name="Select Image"
          className="text-nowrap w-32 text-center"
          onClick={handleImageUpload}
        />
        <input
          type='file'
          id='file'
          ref={fileUploadRef}
          onChange={uploadImageDisplay}
          hidden
        />
      </form>
    </div>
  )
}

export default UploadImage