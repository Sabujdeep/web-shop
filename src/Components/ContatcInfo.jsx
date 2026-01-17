import React from 'react'
import { MdPhoneEnabled } from "react-icons/md";


const ContatcInfo = () => {
  return (
    <div className='flex gap-[1rem] items-center'>
      <div className="contact-icon bg-[#88ad35] h-[4rem] w-[4rem] rounded-[3rem] flex justify-center items-center bg-[#ebf4d3] text-[2rem]">
        <MdPhoneEnabled className='text-black text-2xl' />

      </div>
    <div className="contact-info">
        <p className='font-medium text-[2rem]'>contct-medium</p>
        <p>contact detail</p>
    </div>
    </div>
  )
}

export default ContatcInfo
