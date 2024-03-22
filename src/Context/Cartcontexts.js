import React, { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import CartReducer from '../Reducer/CartReducer';
import { useContext } from 'react';

const CartContext = createContext();

  const getLocalCartData = () => {
    let localCartData = localStorage.getItem("thapaCart");
    if (!localCartData) {
      return [];
    } 
  
   else {
    return JSON.parse(localCartData);
  }
}

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  useEffect(()=>{
     dispatch({ type: "CART_TOTAL_ITEM" })
     dispatch({ type: "CART_TOTAL_PRICE" })
    localStorage.setItem("thapaCart", JSON.stringify(state.cart));
  },[state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart,removeItem,clearCart,setDecrease,setIncrement}}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
