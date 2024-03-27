import React from 'react'
import { FaTrash } from "react-icons/fa";
import Helper from './Helper/Helper';
 import CartAmountToggle from './Componenets/CartAmountToggle';
 import { useCartContext } from './Context/Cartcontexts';
const CartItem = ({ id, name, image, color, price, amount }) => {
  
  const { removeItem,setDecrease,setIncrement} = useCartContext();
  return (
    <div  key={id}  className="cart_heading grid grid-five-column">
    <div className="cart-image--name">
      <div>
        <figure>
          <img src={image} alt={id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}></div>
        </div>
      </div>
    </div>
    <div className="cart-hide">
      <p>
      <Helper price={price}></Helper>
      </p>
    </div>
    <CartAmountToggle
      amount={amount}
      setDecrease={()=>setDecrease(id)}
      setIncrease={()=>setIncrement(id)}
    />
    <div className="cart-hide">
      <p>
      <Helper price={price*amount}></Helper>
      </p>
    </div>

    <div>
      <FaTrash className="remove_icon"  onClick={() => removeItem(id)}/>
    </div>
  </div>
  )
}

export default CartItem