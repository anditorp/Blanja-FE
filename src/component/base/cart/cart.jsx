import React from 'react';
import Cart from '../../../assets/icon/cart.svg';

const cart = ({classname, onClick}) => {
  return (
    <div className={`${classname}`} onClick={onClick}>
        <img src={Cart} alt="cart" />
    </div>
  )
}

export default cart