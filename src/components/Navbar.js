import React from 'react';
import './Navbar.css';
import { FaCartPlus } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cart from './cart';

const Navbar = ({ setShow, size }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/cartpage');
  };

  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={handleClick}>
            Product List
          </span>
          <div className="cart">
            {/* <h4>Add to Cart</h4> */}
            <span className="total-size" onClick={redirect}>
              <FaCartPlus />
              <span ></span>
              {size}
            </span>

            {/* <span className='cart-add'  onClick={redirect}>Cart</span> */}

            {/* <button onClick={() => handleAddToCart(product)}>Add</button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
