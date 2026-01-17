import React from 'react'
import { BsBoxFill } from "react-icons/bs";


const CoreValues = () => {
  return (
    <div className='core-values flex gap-[1rem]'>
      <div className="value-icon bg-black h-[4rem] w-[4rem] rounded-[3rem] flex justify-center items-center bg-[#ebf4d3] text-[2rem]">
        <BsBoxFill className="text-[#88ad35] text-2xl"/>
      </div>
      <div className="core-value-body flex flex-col">
        <h3 className='font-medium'>Passionate about work</h3>
        <p>Value Desc</p>
      </div>
    </div>
  )
}

export default CoreValues
