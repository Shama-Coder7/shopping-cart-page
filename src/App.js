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
        {/* <React.Fragment>
          <Navbar setShow={setShow} size={cart.length} />
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onFilterValueChanged={onFilterValueChanged}
            onFilterCategoryChanged={onFilterCategoryChanged}
          />

          {show ? (
            <Product handleClick={handleClick} data={localProducts} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
        </React.Fragment> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/cartpage" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
