import React from 'react'

const CustomButton = ({text, onClick, type, style }) => {
  
   return (
    <a
      type={type}
      onClick={onClick}
      className={style}
    >
      
      {text}
    </a>
  );
}

export default CustomButton
