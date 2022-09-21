import React from "react";
import "./Navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ setShow }) => {
  const navigate = useNavigate();

  const cartLength =
    localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))?.length

  const redirect = () => {
    navigate("/cartpage");
  };
  return (
    <>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            Product List
          </span>
          <div
            className="cart"
            onClick={redirect}
            // onClick={() => setShow(false)}
          >
            {/* <h4>Add to Cart</h4> */}
            <span>
              <FaCartPlus />
              <span className="total-size">{cartLength}</span>
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
