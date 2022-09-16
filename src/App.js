import React, { useState } from 'react';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Cart from './components/cart';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';
import Header from './components/Header';
import productList from './ProductList';
import { useEffect } from 'react';
import Home from './Home';
import CartPage from './components/CartPage';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [localProducts, setLocalProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLocalProducts(productList);
  }, [productList]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };
  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  useEffect(() => {
    // search item
    if (searchTerm.length > 0) {
      setLocalProducts(
        productList?.filter((item) => item?.title.includes(searchTerm))
      );
    } else {
      setLocalProducts(productList);
    }
  }, [searchTerm]);

  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);


  
  // useEffect(() => {
  //   setProducts(data);
  // }, []);

  // const handleClick = (item) => {
  //   // Update cart item quantity if already in cart
  //   if (cart.some((cartItem) => cartItem.productCode === item.productCode)) {
  //     setCart((cart) =>
  //       cart.map((cartItem) =>
  //         cartItem.productCode === item.productCode
  //           ? {
  //               ...cartItem,
  //               amount: cartItem.amount + 1
  //             }
  //           : cartItem
  //       )
  //     );
  //     return;
  //   }

  //   // Add to cart
  //   setCart((cart) => [
  //     ...cart,
  //     { ...item, amount: 1 } // <-- initial amount 1
  //   ]);
  // };

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


  // const onFilterValueChanged = (val) => {
  //   console.log('val', val);
  //   if (val) {
  //     setLocalProducts(productList?.filter((item) => item?.size === val));
  //   }
  // };

  // const onFilterCategoryChanged = (val) => {
  //   console.log('val', val);
  //   if (val) {
  //     setLocalProducts(
  //       productList?.filter((item) => item?.category?.toLowerCase() === val)
  //     );
  //   }
  // };

  // console.log('searchTerm', searchTerm);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/cartpage" element={ <CartPage />} />
          <Route path="/" element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
