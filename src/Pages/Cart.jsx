import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(
      String(item.productPrice).replace(/[^\d.]/g, "")
    );
    return total + price * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <>
        <Navbar textColor="text-black no-underline hover:text-green-600" />
        <p className="text-center mt-40 h-[60vh]">
          Your cart is empty 🛒
        </p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar textColor="text-black no-underline hover:text-green-600" />
      <div className="p-10 pt-20">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="flex flex-col gap-6">
          {cart.map(item => {
            const price = parseFloat(
              String(item.productPrice).replace(/[^\d.]/g, "")
            );

            return (
              <div
                key={item.id}
                className="flex items-center justify-between border p-5 rounded"
              >
                <div className="flex items-center gap-6">
                  <img src={item.image} className="w-24" />
                  <div>
                    <h2 className="font-semibold">{item.productTitle}</h2>
                    <p>₹{price}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex border">
                  <button
                    onClick={() =>
                      item.quantity > 1 &&
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <p>₹{price * item.quantity}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t pt-6 flex justify-between">
          <h2 className="text-2xl font-semibold">
            Total: ₹{totalPrice}
          </h2>
          <button className="bg-green-600 text-white px-8 py-3">
            Purchase
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
