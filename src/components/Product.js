import React, {useState} from "react";
import Cards from "./Card";
import "./Product.css";

const Product = ({ data, handleClick }) => {

  return (
    <section>
      {data.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}></Cards>
      ))}
    </section>
  );
};

export default Product;