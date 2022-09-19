import React, { useEffect, useState } from "react";
import Cart from "./cart";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
const data = localStorage.getItem('cart')
console.log("data", data);
setCart(JSON.parse(data));
  }, [])

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    localStorage.setItem("cart", JSON.stringify([...arr]));
  };

  return (
    <div>
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
  );
};

export default CartPage;
