import React from 'react'

const headerButton = ({name, onClick, className}) => {
  return (
    <div 
        className={`w-24 h-10 py-1 text-white text-lg font-semibold border rounded-full cursor-pointer hover:bg-orange-500 hover:text-white ${className}`} 
        onClick={onClick}>
        {name}
    </div>
  )
}

export default headerButton