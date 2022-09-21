import React, {useState} from "react";
import Cards from "./Card";
import "./Product.css";

const Product = ({ data, handleClick, qty, setQty}) => {
  return (
    <section>
      {data.map((item) => (
        <Cards
          key={item.id}
          item={item}
          handleClick={handleClick}
          qty={qty}
          setQty={setQty}
        ></Cards>
      ))}
    </section>
  );
};

export default Product;