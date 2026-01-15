import React from 'react'
import { BsBoxFill } from "react-icons/bs";


const CoreValues = () => {
  return (
    <div className='core-values flex'>
      <div className="value-icon">
        <BsBoxFill />
      </div>
      <div className="core-value-body flex flex-col">
        <h3>Passionate about work</h3>
        <p>Value Desc</p>
      </div>
    </div>
  )
}

export default CoreValues
