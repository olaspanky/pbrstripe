"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Nav from "../../components/Navbar"
import DynamicHero from "../../components/DynamicHero"
import data from "../../components/data"

import { useParams } from "next/navigation";



const ProductDetail = () => {
const params = useParams();
const card = data.find((item) => item.id === parseInt(params.productid));
console.log("card is", card)
  

  return (
    <div>
      <Nav/>
      <DynamicHero card={card}/>
    </div>
  );
};

export default ProductDetail;

// Fetch data based on the productId

