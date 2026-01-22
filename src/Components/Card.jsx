import React from 'react'
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Card = ({id, productImage, productPrice, productTitle}) => {
  const navigate = useNavigate();

  return (
        <div class="product-card" onClick={()=>navigate(`/product/${id}`)}>
            <div className="img mb-3">
              <img src={productImage} alt="" />
            </div>
            <div className="rating flex"><CiStar/><CiStar/><CiStar/></div>
            <p className="productTitle font-medium text-[1.5rem]">{productTitle}</p>
            <div className="productCategory">Indoor Plants</div>
            <div className="productPrice">{productPrice}</div>
        </div>
  )
}

export default Card
