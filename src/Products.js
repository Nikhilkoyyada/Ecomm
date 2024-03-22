import React from "react";
import styled from "styled-components";
import Filtering from "./Componenets/Filtering";
import Sort from "./Componenets/Sort";
import { useEffect } from "react";
import Displayproducts from "./Componenets/Displayproducts";
const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Wrapper>
     <div className="container grid grid-filter-column">
        <div>
          <Filtering></Filtering>
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <Displayproducts></Displayproducts>
          </div>
        </section>
      </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
