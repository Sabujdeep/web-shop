import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useCart } from "../context/CartContext";


const ProductDetails = () => {
  const { id } = useParams();
  const products = useProduct();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
const { addToCart } = useCart();


  const product = products.find((item) => item.id === Number(id));

  const handleCart = () =>{
    addToCart(product, quantity)
    alert("items added to cart!")
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Navbar navStyle={"bg-black"} textColor={"text-black no-underline hover:text-green-600"} />
      <div className="productMain  flex pt-25">
        <img src={product.image} alt={product.Title} className="p-20" />
        <div className="productInfo p-[5rem] flex flex-col gap-5 ">
          <h1 className="text-black text-3xl font-bold">
            {product.productTitle}
          </h1>
          <p className="text-xl">{product.productPrice} & Free Shipping</p>
          <p>
            Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
            molestie purus tristique sed tempor consequat risus tellus amet
            augue egestas mauris scelerisque donec ultrices. Sollicitudin
            facilisis massa pellentesque in ultrices enim nunc ac egestas
            elementum ut in ornare sit malesuada.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex border">
              <button
                className="px-4 py-2"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>

              <span className="px-4 py-2">{quantity}</span>

              <button
                className="px-4 py-2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              className="px-6 py-3 bg-green-600 hover:bg-green-800 text-white font-medium rounded"
              onClick={handleCart}
            >
              Add to Cart
            </button>

            <button
              className="px-6 py-3 bg-green-600 hover:bg-green-800 text-white font-medium rounded"
              onClick={()=>navigate('/cart')}
            >
              View Cart
            </button>
          </div>

          <hr className="border h-[2px] my-6" />
          <div className="flex gap-2">
            <p>Category : </p>
            <p className="text-green-500">Indoor Plants</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
{
  /* <div className="p-10">
      <img src={product.image} alt={product.productTitle} />
      <h1 className="text-3xl font-bold">{product.productTitle}</h1>
      <p className="text-xl">{product.productPrice}</p>

      <button className="mt-4 px-6 py-2 bg-green-600 text-white">
        Add to Cart
      </button>
    </div> */
}
