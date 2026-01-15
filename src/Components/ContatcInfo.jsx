import React from 'react'
import { MdPhoneEnabled } from "react-icons/md";


const ContatcInfo = () => {
  return (
    <div className='flex'>
      <div className="contact-icon">
        <MdPhoneEnabled />

      </div>
    <div className="contact-info">
        <h2>contct-medium</h2>
        <p>contact detail</p>
    </div>
    </div>
  )
}

export default ContatcInfo
