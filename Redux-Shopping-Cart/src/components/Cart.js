import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../store/card-slice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCart = () => {
     dispatch(cardActions.setShowCart())  
  }

  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
