import React from 'react'
import Close from '../../assets/close.svg'


const Modal = ({open, onClose, children}) => {
  return (
    <div onClick={onClose} className={`fixed z-50 inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : 'invisible'}`}>
        <div onClick={(e)=>e.stopPropagation()} className={`w-1/2 bg-white  rounded-xl shadow p-12 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        <img onClick={onClose} className='absolute top-2 right-2 p-2 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 ' src={Close} alt="" />
        {children}
        </div>
    </div>
  )
}

export default Modal