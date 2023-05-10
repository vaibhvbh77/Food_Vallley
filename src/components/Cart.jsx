import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(clearCart());
  };
  const removeHandler = (id) => {
    dispatch(removeItem(+id));
    console.log(id);
  };

  return (
    <div>
      <h1>Welcome here is the summary of your order</h1>
      <h2>Cart Items {cart?.length}</h2>
      {cart?.map((curr) => {
        return (
          <div>
            <h2>{curr.name}</h2>
            <h4>
              {curr.price} {curr.id}
            </h4>

            <button
              onClick={() => {
                removeHandler(curr.id);
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}

      <>
        <h2>Do you want to clear the cart ?</h2>
        <button onClick={clearHandler}>Clear Cart</button>
        <h2>Proceed to checkout </h2>
        <button>Checkout</button>
      </>
    </div>
  );
};

export default Cart;
