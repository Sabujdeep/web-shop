import React from 'react'

const ClientReviewCard = ({text}) => {
  return (
    <div className='w-[27rem] h-[10rem] rounded-2xl bg-white p-5'>
      <p>{text}</p>
      <div className="clientImg flex">
        <img src="" alt="customer img" />
        <p>Your Client</p>
      </div>
    </div>
  )
}

export default ClientReviewCard
