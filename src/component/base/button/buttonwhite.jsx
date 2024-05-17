import React from 'react'

const ButtonWhite = ({name, className, onClick }) => {
  return (
    <div 
        className={`w-24 h-10 py-1 text-gray-500 text-lg font-semibold border rounded-full cursor-pointer hover:bg-orange-500 hover:text-white ${className}`} 
        onClick={onClick}>
        {name}
    </div>
  )
}

export default ButtonWhite