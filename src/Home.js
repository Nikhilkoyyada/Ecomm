import React from 'react'
import Services from './Componenets/Services';
import Herosection from './Componenets/Herosection';
import Trust from './Componenets/Trust';
import FeatureProduct from './Componenets/FeatureProduct';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const data={
    name:"PARVAS ECOMMERCE STORE"
  }
  return <>
  <Herosection mydata={data}></Herosection>
<FeatureProduct/>
  <Services></Services>
  <Trust></Trust>
  </>

}


export default Home