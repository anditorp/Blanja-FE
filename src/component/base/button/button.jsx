import React from 'react'

const button = ({name, className, onClick }) => {
  return (
    <div className={`bg-red-maroon w-96 h-12 py-2 text-white text-lg font-semibold border rounded-full cursor-pointer hover:bg-orange-500 ${className}`} onClick={onClick}>
        {name}
    </div>
  )
}

export default button