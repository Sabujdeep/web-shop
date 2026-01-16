import React from 'react'

const Services = ({serviceIcon, serviceTitle, serviceBody}) => {
  return (
    <div>
      <div className="service-icon">
        {serviceIcon}
      </div>
      <h2>{serviceTitle}</h2>
      <p>{serviceBody}</p>
    </div>
  )
}

export default Services
