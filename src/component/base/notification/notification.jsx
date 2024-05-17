import React from 'react';
import Notification from '../../../assets/icon/bell.svg';

const notification = ({onclick, classname}) => {
  return (
    <div className={`${classname}`} onClick={onclick}>
        <img src={Notification} alt="Notification" />
    </div>
  )
}

export default notification