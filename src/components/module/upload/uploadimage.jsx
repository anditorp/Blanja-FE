/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import axios from 'axios';
import DefaultImage from '../../../assets/profile/default.jpg';
import ButtonWhite from '@/components/base/button/buttonwhite';

const UploadImage = ({ onImageChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(DefaultImage);
  const fileUploadRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('photo', selectedFile);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${import.meta.env.VITE_URL_BLANJA}/customer/profile/photo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (onImageChange) onImageChange(response.data.filePath);
      alert('Update Profile Picture Success!!')
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(DefaultImage);
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <img
        src={preview}
        alt='User Avatar'
        className='w-28 h-28 rounded-full relative left-2'
      />
      <div>
        <ButtonWhite
          type='button'
          name='Select Image'
          className='text-nowrap w-32 text-center'
          onClick={() => fileUploadRef.current.click()}
        />
        <input
          type='file'
          id='file'
          ref={fileUploadRef}
          onChange={handleFileSelect}
          hidden
        />
        <ButtonWhite
          type='submit'
          name='Upload Image'
          className='text-nowrap w-32 text-center mt-2'
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UploadImage;
