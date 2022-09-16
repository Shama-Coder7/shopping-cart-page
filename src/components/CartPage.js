import React, { useState } from 'react';
import Cart from './cart';
// import productList from './ProductList';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const [show, setShow] = useState(true);
  // const [localProducts, setLocalProducts] = useState([]);

  // useEffect(() => {
  //   setLocalProducts(productList);
  // }, [productList]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // setCart((cart) => 
  //   ...cart,
  //   {...item, amount: 1}
  // })

  const handleClick = (item) => {
    // Update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem.productCode === item.productCode)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.productCode === item.productCode
            ? {
                ...cartItem,
                amount: cartItem.amount + 1
              }
            : cartItem
        )
      );
      return;
    }

    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
  };


  const handleChange = (productCode, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.productCode === productCode
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + d
                }
              ]
          : [cartItem]
      )
    );
  };
  

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  return (
    <div>
      <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
    </div>
  );
};
export default CartPage;
