import React from 'react'

const CustomButton = ({text, onClick, type}) => {
  
   return (
    <button
      type={type}
      onClick={onClick}
      // disabled={disabled}
      className="btn"
    >
      {text}
    </button>
  );
}

export default CustomButton
