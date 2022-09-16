import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
// import { ImCross } from "react-icons/Im";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  // const handleRemove = (productCode) => {
  //   setCart(cart => cart.filter(item => item.productCode !== productCode));
  // };
  // const price = cart.reduce((total, item) => total + item.amount * item.price, 0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  // const thankyounote = () => {
  //   alert('Thanks for Shopping');
  // };

  const navigate = useNavigate();

  return (
    <article>
    <h1 style={{marginLeft: '250px', color: 'grey', marginTop:'60px'}}><u>Your Cart</u></h1>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>x</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Amount</span>
        <span>$ {price}</span>
      </div>
      <button className="checkout" onClick={() => navigate('/checkout')}>
        {' '}
        Proceed to Checkout
      </button>
    </article>
    
  );
};

export default Cart;

// import React from 'react';
// import { Button, Container, Col, Row, Table } from 'react-bootstrap';
// import { useCart } from 'react-use-cart';
// // import { useThemeHook } from '../GlobalComponents/ThemeProvider';
// import { BsCartCheck, BsCartX } from 'react-icons/bs';

// const Cart = () => {
//   const {
//     isEmpty,
//     items,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();
//   return (
//     <Container className="py-4 mt-5">
//       <Row className="justify-content-center">
//         <Table>
//           <tbody>
//             {items.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>
//                     <div
//                       style={{
//                         background: 'white',
//                         height: '8rem',
//                         overflow: 'hidden',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <div style={{ padding: '.5rem' }}>
//                         <img
//                           src={item.image}
//                           style={{ width: '4rem' }}
//                           alt={item.title}
//                         />
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <h6
//                       style={{
//                         whiteSpace: 'nowrap',
//                         width: '14rem',
//                         overflow: 'hidden',
//                         textOverFlow: 'ellipsis',
//                       }}
//                     >
//                       {item.title}
//                     </h6>
//                   </td>
//                   <td>Rs. {item.price}</td>
//                   <td>Quantity ({item.quantity})</td>
//                   <td>
//                     <Button
//                       onClick={() =>
//                         updateItemQuantity(item.id, item.quantity - 1)
//                       }
//                       className="ms-2"
//                     >
//                       -
//                     </Button>
//                     <Button
//                       onClick={() =>
//                         updateItemQuantity(item.id, item.quantity + 1)
//                       }
//                       className="ms-2"
//                     >
//                       +
//                     </Button>
//                     <Button
//                       variant="danger"
//                       onClick={() => removeItem(item.id)}
//                       className="ms-2"
//                     >
//                       Remove Item
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//         {!isEmpty && (
//           <Row>
//             <Col className="py-2">
//               <h4>Total Price: Rs. {cartTotal}</h4>
//             </Col>
//             <Col className="p-0" md={4}>
//               <Button
//                 variant="danger"
//                 className="m-2"
//                 onClick={() => emptyCart()}
//               >
//                 <BsCartX size="1.7rem" />
//                 Clear Cart
//               </Button>
//               <Button variant="success" className="m-2">
//                 <BsCartCheck size="1.7rem" />
//                 Clear Cart
//               </Button>
//             </Col>
//           </Row>
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default Cart;
