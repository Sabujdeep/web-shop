import React from 'react'
import { createContext, useContext, useState } from 'react'
import plantsData from '../plantsData';


const ProductContext = createContext(null);

// console.log(plantsData);

export const ProductProvider = ({ children}) => {

  

  // const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={plantsData}>
        {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext);
