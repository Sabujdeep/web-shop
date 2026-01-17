import React from 'react'

const Services = ({serviceIcon, serviceTitle, serviceBody}) => {
  return (
    <div className='h-[8rem] w-[15rem] flex flex-col items-center gap-1'>
      <div className="service-icon h-[4rem] w-[4rem] rounded-[3rem] flex justify-center items-center bg-[#ebf4d3] text-[2rem]">
        {serviceIcon}
      </div>
      <h2 className='service-title'>{serviceTitle}</h2>
      <p>{serviceBody}</p>
    </div>
  )
}

export default Services
