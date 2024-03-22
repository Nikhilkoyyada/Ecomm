import React, { useState } from 'react'
import { Button } from '../styles/Button';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/Cartcontexts';
const Colouraddtocart = ({Product}) => {
  const {addToCart}=useCartContext()
    const {id,colors,stock}=Product
    const [amount, setAmount] = useState(1);
    

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
    const [color,setColor]=useState(colors[0])
  return (
 <Wrapper>
    <div className='colors '>
      <p>colors:
      {colors.map((curr, index) => {
  return (
    <Button
      key={index} 
      className={curr === color ? "btnStyle active" : "btnStyle"}
      onClick={() => setColor(curr)}
      style={{ backgroundColor: curr }}
    >
      {color === curr ? <FaCheck className="checkStyle" /> : null}
    </Button>
  );
})}

        </p>
    </div>
    <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, Product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>

  )
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    
    position: absolute; /* Position absolute for precise positioning */
    top: 50%; /* Move to the middle vertically */
    left: 50%; /* Move to the middle horizontally */
    transform: translate(-50%, -50%); /* Center the icon */
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default Colouraddtocart