import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "./Context/Context";
import Navigation from "./Componenets/Navigation";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Helper from "./Helper/Helper";
import Star from "./Componenets/Star";
import Productimage from "./Productimage";
import Colouraddtocart from "./Componenets/Colouraddtocart";
const api= "https://api.pujakaitem.com/api/products";
const SingleProduct=()=>{
  const {getSingleProduct,singleProduct}=useProductContext()
const {id}=useParams()


const {

  name,
  company,
  price,
  description,
 
  stock,
  stars,
  reviews,
  image,
} = singleProduct;

useEffect(() => {
  window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
  getSingleProduct(`${api}?id=${id}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  return(
 <Wrapper>
  <Navigation name={name}></Navigation>
  <div className="container">
 
    <div className="grid grid-two-column">
    <div className="product_images">
           <Productimage image={image}></Productimage> 
          </div>
   
    <div className="product-data">
      <h2>{name}</h2>
      <Star stars={stars} reviews={reviews} />
      <p className="product-data-price">
        MRP:
        <del>
          <Helper price={price+25000}></Helper>
        </del>
      </p>
      <p className="product-data-price product-data-real-price">
        Deal of the day:<Helper price= {price}></Helper>
      </p>
      <p>{description}</p>
      <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Avalable:
                <span>{stock>0?"Instock":"Not Avalble"}</span>
              </p>
              <p>ID:<span>{id}</span></p>
              <p>Brand <span>{company}</span></p>

            </div>
            <hr/>
            {stock>0&&<Colouraddtocart Product={singleProduct}></Colouraddtocart>}
      </div>
  </div>
  </div>
 </Wrapper>
  )
}


const Wrapper = styled.section`

  .container {
    padding: 9rem 12rem;


  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;