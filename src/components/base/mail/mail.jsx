import React from 'react';
import Mail from '../../../assets/icon/mail.svg';

const mail = ({onClick, classname}) => {
  return (
    <div className={`${classname}`} onClick={onClick}>
        <img src={Mail} alt="Mail" />
    </div>
  )
}

export default mail