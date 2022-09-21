import React from "react";
// import { useState } from "react";
import './Header.css';

const Header = ({
  setSearchTerm,
  searchTerm,
  onFilterValueChanged,
  onFilterCategoryChanged,
}) => {
  return (
    <div className="header">
      <div>
        <select
          name="L"
          onChange={(e) => onFilterCategoryChanged(e.target.value)}
        >
          <option>Select Category</option>
          {/* <option onClick={() => fiterResult('shirt')}>Shirt</option> */}
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Womens clothing</option>
          <option value="men's clothing">Mens clothing</option>
        </select>

        <select onChange={(e) => onFilterValueChanged(e.target.value)}>
          <option>Select Size</option>
          <option value={"S"}>S</option>
          <option value={"M"}>M</option>
          <option value={"L"}>L</option>
          <option value={"XL"}>XL</option>
          <option value={"XXL"}>XXL</option>
        </select>
      </div>
      <div className="searchInput_Container">
        <input
          id="list"
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      
    </div>
  );
};

export default Header;
