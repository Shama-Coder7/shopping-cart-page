import React, { useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import "./App.css";
import Cart from "./components/cart";
import Header from "./components/Header";
import productList from "./ProductList";
import { useEffect } from "react";
// import { Link } from 'react-router-dom';

const Home = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [localProducts, setLocalProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLocalProducts(productList);
  }, [productList]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    const tempCart = [...cart, item];
    setCart(tempCart);
    localStorage.setItem("cart", JSON.stringify(tempCart));
  };

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

  const onFilterValueChanged = (val) => {
    console.log("val", val);
    if (val) {
      setLocalProducts(productList?.filter((item) => item?.size === val));
    }
  };

  const onFilterCategoryChanged = (val) => {
    console.log("val", val);
    if (val) {
      setLocalProducts(
        productList?.filter((item) => item?.category?.toLowerCase() === val)
      );
    }
  };

  console.log("cart-home", cart);
  return (
    <div className="home">
      <>
        <React.Fragment>
          <Navbar setShow={setShow} size={cart.length} />
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onFilterValueChanged={onFilterValueChanged}
            onFilterCategoryChanged={onFilterCategoryChanged}
          />
          {/* 
            <Product handleClick={handleClick} data={localProducts} />
           <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> */}

          {/* {show ? ( */}
            <Product handleClick={handleClick} data={localProducts} />
          {/* // ) : ( */}
            {/* <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> */}
          {/* // )} */}
        </React.Fragment>
      </>
    </div>
  );
};

export default Home;
